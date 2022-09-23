import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  employee: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.employee = this.employeeService.getAllEmployee();
  }
}
