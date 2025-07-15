import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ComfortPageComponent } from './pages/comfort-page/comfort-page.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'home',
        component: HomePageComponent
    },

    {
        path: 'gallery',
        component: GalleryPageComponent
    },

    {
        path: 'comfort',
        component: ComfortPageComponent
    },

    {
        path: 'event',
        component: EventPageComponent
    },

    {
        path: 'contact',
        component: ContactPageComponent
    }
];
