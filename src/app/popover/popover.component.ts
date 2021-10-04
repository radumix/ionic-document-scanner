import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../service/images.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit() {}

  async dismissClick(){
    await this.imagesService.dismissClick();
  }

}
