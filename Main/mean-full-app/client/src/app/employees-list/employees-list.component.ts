import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
 selector: 'app-employees-list',
 templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent implements OnInit {
 employees$: Observable<Employee[]> = new Observable();
 
 constructor(private employeesService: EmployeeService) { }
 
 ngOnInit(): void {
   this.fetchEmployees();
 }
 
 deleteEmployee(id: string): void {
   this.employeesService.deleteEmployee(id).subscribe({
     next: () => this.fetchEmployees()
   });
 }
 
 private fetchEmployees(): void {
   this.employees$ = this.employeesService.getEmployees();
 }
}