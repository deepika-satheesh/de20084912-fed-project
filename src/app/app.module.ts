import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { EmployeeService } from './employee.service';
import { FilterPipe } from './filter.pipe';
import { RouterModule} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot([
         {
            path: 'employees',
            component: EmployeeListComponent
         },
         {
           path: 'addEmployee',
           component: AddEmployeeComponent 
         },
          {
           path: 'updateEmployee/:id',
           component: UpdateEmployeeComponent 
         },
          {
           path: 'deleteEmployee/:id',
           component: DeleteEmployeeComponent 
         },
         {
           path: 'details/:id',
           component: EmployeeDetailComponent 
         }
      ]),
  ],
  declarations: [ AppComponent, FilterPipe, EmployeeListComponent, AddEmployeeComponent, UpdateEmployeeComponent, DeleteEmployeeComponent, EmployeeDetailComponent ],
  providers:    [ DataService, EmployeeService ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]
})
export class AppModule { }
