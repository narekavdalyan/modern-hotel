import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-body',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-body.component.html',
  styleUrl: './contact-body.component.css'
})
export class ContactBodyComponent {

  contactForm : FormGroup;

  constructor(private fb : FormBuilder, private router : Router) {
    this.contactForm = this.fb.group({
      name : ["", [Validators.required, Validators.minLength(2)]],
      email : ["", [Validators.required, Validators.email]],
      phone : ["", [Validators.required]],
    });

  }

  contactSendFn() {
    this.router.navigate(['home']);
  }

}
