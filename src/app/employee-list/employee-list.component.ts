import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService} from '../register.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  empData;
  constructor(private router: Router,public registerService : RegisterService) {
    this.empData = {};
   }
  ngOnInit(): void {
    this.registerService.getData('registerData');
    this.empData = this.registerService.getData('registerData');
    if(this.empData.length == 0){
      this.router.navigate(['./register']);
      return;
    }
  }

}
