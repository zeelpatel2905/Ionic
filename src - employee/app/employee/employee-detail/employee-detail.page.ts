import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {
  oneEmployee: Employee;
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('employeeId')) {
        this.router.navigate(['/employee']);
        return;
      }
      const employeeId = paramMap.get('employeeId');
      this.oneEmployee = this.employeeService.getEmployee(employeeId);
    });
  }

  onDeleteEmployee() {
    this.alert.create({
      header:'Are you sure?',
      message:'Do you want to remove employee?',
      buttons:[{
        text:'Yes',
        handler:()=>{
          this.employeeService.deleteEmployee(this.oneEmployee.id);
          this.router.navigate(['/employee']);
        }
      },
      {
        text:'Cancel',
        role:'cancel'
      }]
    }).then(alertEl=>{
      alertEl.present();
    });
  }
}
