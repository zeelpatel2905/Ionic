import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StudentsPage } from '../students/students.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  incomingData: any = {};
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    if (this.route.snapshot.params['data'] != null) {
      this.incomingData = JSON.parse(this.route.snapshot.params['data']);
    }
    else {
      this.navCtrl.navigateForward('students');
    }
  }

  ngOnInit() {
  }

}
