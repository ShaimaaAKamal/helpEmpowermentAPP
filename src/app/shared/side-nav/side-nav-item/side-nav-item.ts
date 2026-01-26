import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Navitem } from '../../../models/navitem';
import { Shared } from '../../Services/shared/shared';

interface parentNavItem {
  isCollapsed: boolean;
  navItemName: string;
  classes: string;
  route:string,
  subItems?: Navitem [];
}

@Component({
  selector: 'app-side-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav-item.html',
  styleUrls: ['./side-nav-item.scss']
})
export class SideNavItem {
  private shared=inject(Shared);
  lang=this.shared.lang;
  NavitemComponentData = input<parentNavItem>({
    isCollapsed: false,
    navItemName: '',
    classes: '',
    route:'',
  });

  showSubnav = false;

  constructor(private __Router: Router) {}

  toggleSubnav() {
    if (this.NavitemComponentData()?.subItems?.length) {
      this.showSubnav = !this.showSubnav;
    }
  }
}
