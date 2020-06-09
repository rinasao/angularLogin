import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor() { }
  empData;
  ngOnInit(): void {
  }
  onNavigation(feature){
    this.empData = feature;
    console.log("emp data", this.empData);
  }

}
