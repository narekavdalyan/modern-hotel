import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public router : Router ) { }

  goToContactPage() {
    this.router.navigate(['contact']);
  }
}
