import { Component, inject } from '@angular/core';
import { SpkNgSelectComponent } from '../../../shared/spk-ng-select/spk-ng-select.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-certification-question',
  imports: [SpkNgSelectComponent, ButtonComponent],
  templateUrl: './certification-question.component.html',
  styleUrl: './certification-question.component.scss'
})
export class CertificationQuestionComponent {
  // certificationOptions =  [
  //   { label: "PMP", value: "PMP" },
  //   { label: "CAMP", value: "CAMP" }
  // ]
  // questionTypes = [
  //   { label: "Single Choice", value: 0 },
  //   { label: "Muliple Choice", value: 1 },
  //   { label: "Drag and Drop", value: 2 }

  // ]
  // fb = inject(FormBuilder);
  // form = this.fb.group({
  //   certification: ['', Validators.required],
  //   questionType: [0, Validators.required],
  // });

  onAddNewCertification(){

  }
}
