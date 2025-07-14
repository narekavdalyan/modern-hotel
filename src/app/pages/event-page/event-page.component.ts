import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { EventBodyComponent } from "../../components/event-body/event-body.component";

@Component({
  selector: 'app-event-page',
  imports: [FooterComponent, EventBodyComponent],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css'
})
export class EventPageComponent {

}
