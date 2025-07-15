import { Component } from '@angular/core';
import { ContactBodyComponent } from "../../components/contact-body/contact-body.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contact-page',
  imports: [ContactBodyComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
