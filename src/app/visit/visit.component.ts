import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  @Input() private apptStatus;

  constructor() { }

  ngOnInit() {
  }

}
