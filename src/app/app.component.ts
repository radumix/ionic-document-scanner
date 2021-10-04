import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true}) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage

  ) {
    SplashScreen.hide();
    this.platform.backButton.subscribeWithPriority(10, () => {
      navigator['app'].exitApp();
      //this.router.navigateByUrl("/scanner");
    });
  }

  async ngOnInit() {
    await this.storage.create();
  }
}
