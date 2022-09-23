import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePageRoutingModule } from './employee-routing.module';

import { EmployeePage } from './employee.page';
import { RouterModule, Routes } from '@angular/router'; 
import { EmployeeItemComponent } from './employee-item/employee-item.component';

const routes:Routes=[
  {
    path:'',
    component:EmployeePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeePage,EmployeeItemComponent]
})
export class EmployeePageModule {}
