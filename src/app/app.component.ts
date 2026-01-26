import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Navbar } from './shared/navbar/navbar';
import { SideNav } from './shared/side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, Navbar, SideNav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Help Empowerment';
}
