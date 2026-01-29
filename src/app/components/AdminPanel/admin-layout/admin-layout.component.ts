import { Component } from '@angular/core';
import { Main } from '../../main/main';
import { Navbar } from '../../../shared/Admin Panel/navbar/navbar';
import { SideNav } from '../../../shared/Admin Panel/side-nav/side-nav';

@Component({
  selector: 'app-admin-layout',
  imports: [ Main, Navbar, SideNav],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
