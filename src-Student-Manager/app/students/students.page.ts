import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';
import {Geolocation}

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  user: any = {};
  locationWatchStarted: boolean;
  locationSubscription: any;
  locationTraces = [];

  constructor(private alertController: AlertController, private navCtrl: NavController,private geolocation:Geolocation) { }

  ngOnInit() {
  }

  async onBtnChangeClick() {
    if (this.user.username == "admin" && this.user.password == "admin123") {
      this.navCtrl.navigateForward([
        'dashboard',
        {
          data: JSON.stringify(this.user),
        },
      ]);
    }
    else {
      const alert = await this.alertController.create(
        {
          header: 'Oops!',
          subHeader: 'Invalid Username/Password',
          buttons: ['OK'],
        },
      );
      alert.present();
    }
  }

  getCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.locationTraces.push({
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          accuracy: resp.coords.accuracy,
          timestamp: resp.timestamp,
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    this.locationSubscription = this.geolocation.watchPosition();
    this.locationSubscription.subscribe((resp) => {
      this.locationWatchStarted = true;
      this.locationTraces.push({
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        accuracy: resp.coords.accuracy,
        timestamp: resp.timestamp,
      });
    });
  }

}
