import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const routeRedirect = document.createElement('ion-route-redirect');


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
    this.router.navigateByUrl("/scanner");
    }, 1000);
  }


}
