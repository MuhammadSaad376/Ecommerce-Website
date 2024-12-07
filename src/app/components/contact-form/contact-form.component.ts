import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  log(x: any) {
    console.log(x);
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
  contacMethod = [
    { id: 1, name: 'email' },
    { id: 2, name: 'MobileNumber' },
  ];
}
