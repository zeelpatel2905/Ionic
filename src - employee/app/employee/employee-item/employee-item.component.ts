import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
})
export class EmployeeItemComponent implements OnInit {
  @Input() employeeItem:Employee;
  constructor() { }

  ngOnInit() {}

}
