import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  DakotaInfo: any;

  constructor(private infoService: InfoService) {
    this.DakotaInfo = infoService.getDakotaInfo();
   }

  ngOnInit(): void {
  }

}
