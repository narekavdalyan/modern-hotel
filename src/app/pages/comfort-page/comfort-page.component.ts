import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ComfortBodyComponent } from "../../components/comfort-body/comfort-body.component";

@Component({
  selector: 'app-comfort-page',
  imports: [FooterComponent, ComfortBodyComponent],
  templateUrl: './comfort-page.component.html',
  styleUrl: './comfort-page.component.css'
})
export class ComfortPageComponent {

}
