import { Component, computed, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CertificationCardComponent } from '../../../shared/certification-card/certification-card.component';
import { CertificationsStore } from '../../../AdminPanelStores/CertificationStore/certification.store';
import { Certification } from '../../../models/certification';

@Component({
  selector: 'app-certifications',
  imports: [ButtonComponent, CertificationCardComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  providers: [CertificationsStore]
})
export class CertificationsComponent {
  private store = inject(CertificationsStore);
  certifications = computed(() => this.store.certifications());
  onAddNewCertification() {

  }
  openCertificationPage(certification:Certification){
    console.log(certification);
  }
}
