import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgbCollapseModule, RouterLink,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuCollapsed = true;

}
