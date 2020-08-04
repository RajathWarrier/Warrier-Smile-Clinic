import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() apptStatus = new EventEmitter<boolean>();

  public index = 0;
  private images = 3;
  public hidden = true;
  public showAbout = false;
  public showContact = false;
  appointmentForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.appointmentForm = this.formBuilder.group({
      fName: [''],
      lName: [''],
      email: [''],
      contactNo: [''],
      prefDate: [''],
      prefTime: ['']
    });
   }

  ngOnInit() {
    this.showSlides();
  }

  showSlides() {
    if (this.index === this.images) {
      this.index = 0;
    }
    this.index++;
    setTimeout(() => {
      this.showSlides();
    }, 5000);
  }

  showAppointment() {
    this.hidden = !this.hidden;
    this.apptStatus.emit(!this.hidden);
  }

  show(section: string) {
    switch (section) {
      case 'contact':
        this.showContact = !this.showContact;
        break;
      case 'about':
        this.showAbout = !this.showAbout;
        break;
    }
  }

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.appointmentForm.get('fName').value + ' ' + this.appointmentForm.get('lName').value);
    formData.append('email', this.appointmentForm.get('email').value);
    formData.append('contactNo', this.appointmentForm.get('contactNo').value);
    formData.append('preferredDateTime', this.appointmentForm.get('prefDate').value + ' ' + this.appointmentForm.get('prefTime').value);
    console.log(formData.get('name') + ' ' + formData.get('preferredDateTime'));
  }

}
