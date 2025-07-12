import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HomeCarouselComponent } from "../../components/home-carousel/home-carousel.component";

@Component({
  selector: 'app-home-page',
  imports: [FooterComponent, HomeCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
