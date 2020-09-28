import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, ParamMap} from "@angular/router"
import { Location } from "@angular/common"
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

 public id:any;
  public employees: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private location:Location,private router: Router) { }

  ngOnInit() {
    
 this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.employeeService.deleteEmployee(this.id).subscribe((data : Employee)=>{   
     this.router.navigate(['/employees']);
    })
  }

}