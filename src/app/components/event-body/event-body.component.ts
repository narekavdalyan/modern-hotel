import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-event-body',
  imports: [],
  templateUrl: './event-body.component.html',
  styleUrl: './event-body.component.css'
})
export class EventBodyComponent {

  constructor(public mainService : MainService) {}

  goContactPage() {
    this.mainService.goToContactPage();
  }

}
