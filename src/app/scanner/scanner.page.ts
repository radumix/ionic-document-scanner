import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ImagesService } from '../service/images.service';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
 

  @ViewChild(IonSlides) slider: IonSlides;
  slides: any;
  constructor(
    private imagesService: ImagesService,
    private documentScanner: DocumentScanner,
  ) {}

   clear(){
    this.imagesService.presentPopover('click');
   }

  

  ngOnInit() {
    this.slides = this.imagesService.getSlides(2);
    this.imagesService.get();
  }

  close(){
    this.slider.slideTo(2, 2000);
  }

  doScan(){
    let opts: DocumentScannerOptions = 
    {
      sourceType : 1,
      fileName : "page1",
      quality : 2.5,
      returnBase64 : true
  };
    this.documentScanner.scanDoc()
  .then(res => {
    this.imagesService.presentToastWithOptions();
    this.close();
  })
  .catch(error =>{
    this.imagesService.get();
    //this.close();
    console.error(error);
  });

  }

}
