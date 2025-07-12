import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { GalleryBodyComponent } from "../../components/gallery-body/gallery-body.component";

@Component({
  selector: 'app-gallery-page',
  imports: [FooterComponent, GalleryBodyComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {

}
