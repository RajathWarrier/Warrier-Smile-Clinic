import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() public apptStatus;

  contactForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contactNo: [''],
      message: ['']
    });
  }

  ngOnInit() { }

  submitForm() {
    const formData = new FormData();
    formData.append('type', 'enquiry');
    formData.append('name', this.contactForm.get('name').value);
    formData.append('email', this.contactForm.get('email').value);
    formData.append('contactNo', this.contactForm.get('contactNo').value);
    formData.append('message', this.contactForm.get('message').value);

    this.formService.sendFormData(formData);
    alert('Thank you for contacting us, we`ll get back to you soon!');
    this.contactForm.reset();
  }

}
