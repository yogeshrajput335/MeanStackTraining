import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edir-employee',
  templateUrl: './edir-employee.component.html',
  styleUrls: ['./edir-employee.component.css']
})
export class EdirEmployeeComponent {
  employee: BehaviorSubject<Employee> = new BehaviorSubject({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) { }
 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }
 
    this.employeeService.getEmployee(id !).subscribe((employee) => {
      this.employee.next(employee);
    });
  }
 
  editEmployee(employee: Employee) {
    this.employeeService.updateEmployee(this.employee.value._id || '', employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },
        error: (error: any) => {
          alert('Failed to update employee');
          console.error(error);
        }
      })
  }
}
