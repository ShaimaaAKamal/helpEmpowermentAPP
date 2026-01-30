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
  certificationOptions =  [
    { label: "PMP", value: "PMP" },
    { label: "CAMP", value: "CAMP" }
  ]
  questionTypes = [
    { label: "Single Choice", value: 0 },
    { label: "Muliple Choice", value: 1 },
    { label: "Drag and Drop", value: 2 }

  ]

  examNo = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
  ];
  fb = inject(FormBuilder);
  form = this.fb.group({
    certification: ['', Validators.required],
    questionType: [0, Validators.required],
  });

  onAddNewCertification(){

  }
}
