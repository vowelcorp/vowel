import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.scss']
})
export class LeaderComponent implements OnInit {
  title = 'Annotating Solutions for Problem Solvers';
  constructor() { }

  ngOnInit() {
  }

}
