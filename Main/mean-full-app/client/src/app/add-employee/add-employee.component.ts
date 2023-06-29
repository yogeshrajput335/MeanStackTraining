import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }
  
  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          alert("Failed to create employee");
          console.error(error);
        }
      });
  }
}
