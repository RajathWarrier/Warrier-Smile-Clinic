import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor() {}

  private alert() {
    window.alert('Thank you for making an appointment with us! We`ll get back to you soon');
  }

  ngOnInit() {
  }

}
