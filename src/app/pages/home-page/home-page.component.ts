import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HomeCarouselComponent } from "../../components/home-carousel/home-carousel.component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, FooterComponent, HomeCarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
