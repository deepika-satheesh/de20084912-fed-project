import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public nameFilter:string='';
  employees: any[] = [];
  public count:number=0;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data : any[])=>{
        
        this.employees = data;
        this.count=this.employees.length;
    })
  }
}
