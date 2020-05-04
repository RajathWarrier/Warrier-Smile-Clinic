import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() apptStatus = new EventEmitter<boolean>();

  private index = 0;
  private images = 3;
  public hidden = true;
  private showAbout = false;
  private showContact = false;

  constructor() { }

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

}
