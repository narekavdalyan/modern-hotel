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
//   isActive = false;

//   changeColor() {
//     this.isActive = !this.isActive;

//   }

//   menuItems = [
//   { name: 'home', label: 'Главная', link: '' },
//   { name: 'gallery', label: 'Галерея', link: '.' },
//   { name: 'rooms', label: 'Номера', link: '.' },
//   { name: 'comforts', label: 'Удобства', link: '' },
//   { name: 'events', label: 'Встречи и события', link: '' }
//  ];

//   activeItem = 'home';

//   setActive(name : string) {
//     this.activeItem = name;
//   }

}
