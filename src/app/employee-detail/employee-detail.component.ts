import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  goback(){
    this.router.navigate(['employees']);
  }
}