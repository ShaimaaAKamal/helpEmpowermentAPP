import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CertificationsStore } from '../../../AdminPanelStores/CertificationStore/certification.store';
import { SpkNgSelectComponent } from '../../../shared/spk-ng-select/spk-ng-select.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputComponent } from '../../../shared/input/input.component';
import { Certification } from '../../../models/certification';
import { FileUploadComponent } from '../../../shared/file-upload/file-upload.component';
import { CertificationService } from '../../../Services/certification.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-certification',
  imports: [SpkNgSelectComponent, ReactiveFormsModule, ButtonComponent,
    InputComponent, FileUploadComponent, AsyncPipe ,JsonPipe],
  templateUrl: './create-new-certification.component.html',
  styleUrl: './create-new-certification.component.scss'
})
export class CreateNewCertificationComponent {
  private certificationService=inject(CertificationService);
  fb = inject(FormBuilder);
  store = inject(CertificationsStore);
  id: string = '';

  courseLevels$ = this.certificationService.getCourseLevels();


  courseCategories$ = this.certificationService.getCourseCategories();

  users = [
    { label: 'Ahmed Ali', value: '3fa85f64-5717-4562-b3fc-2c963f66afa6' },
  ];

  status = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },

  ];

  form = this.fb.group({
    courseCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    courseName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    courseDescription: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    courseLevelLookupId: ['', [Validators.required]],
    courseCategoryLookupId: ['', [Validators.required]],
    createdBy: ['', [Validators.required]],
    isActive: [true, [Validators.required]],
    // files: [[] as File[]]
  });

  oid = input<string>('');
  @Output() cancalEvent = new EventEmitter<any>();

  constructor() {

    effect(() => {
      const oid = this.oid();
      if (!oid) {
        this.form.reset();
        return;
      }
      this.store.getCertification(oid);
    });

    effect(() => {
      const certification = this.store.selectedCertification();
      if (certification) {
        this.form.patchValue({
          courseCode: certification.courseCode,
          courseName: certification.courseName,
          courseDescription: certification.courseDescription,
          courseLevelLookupId: certification.courseLevelLookupId,
          courseCategoryLookupId: certification.courseCategoryLookupId,
          createdBy: certification.createdBy
        });
      }
    });

    effect(() => {
      const success = this.store.success();
      if (success)
        this.cancel();
      this.store.setSuccess(false);
    });
  }



  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // console.log(this.form.value.files); // File[]

    if (this.form.valid && !this.oid()) {
      this.createCertification();
    }
    if (this.form.valid && this.oid()) {
      this.editCertificaion();
    }
  }
  createCertification() {
    this.store.addCertification(this.getPayload());
  }
  editCertificaion() {
    this.store.updateCertification({ id: this.oid(), body: this.getPayload() });
  }

  getPayload() {
    const v = this.form.getRawValue();
    const payload: Certification = {
      ...(this.oid() ? { oid: this.oid() } : {}),
      courseCode: v.courseCode!,
      courseName: v.courseName!,
      courseDescription: v.courseDescription!,
      courseLevelLookupId: v.courseLevelLookupId!,
      courseCategoryLookupId: v.courseCategoryLookupId!,
      createdBy: v.createdBy!,
    };
    return payload;
  }
  cancel() {
    this.form.markAsUntouched();
    this.form.reset();
    this.cancalEvent.emit();
  }
}

