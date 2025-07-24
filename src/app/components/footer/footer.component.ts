import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerForm : FormGroup;



  constructor(public mainService : MainService, private fb : FormBuilder, private router : Router) {

    this.footerForm = fb.group({
      email : ["", [Validators.required, Validators.email]]
    })

  }
  goContactPage() {
    this.mainService.goToContactPage();
  }

  footerOkBtnFn() {
    if(this.footerForm.valid) {
         this.router.navigate(['contact']);
    }
 
  }
}
