import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'dakota-table',
  templateUrl: './dakota-table.component.html',
  styleUrls: ['./dakota-table.component.css']
})
export class DakotaTableComponent implements OnInit {

  DakotaInfo: any;

  TableButtons = ['Links', 'Languages', 'Option 3'];

  hidden1 = false;
  hidden2 = true;
  hidden3 = true;

constructor(private infoService: InfoService) { 
  this.DakotaInfo = infoService.getDakotaInfo();
}
  ngOnInit(): void {
  }

  displayOne(){
    this.hidden1 = false;
    this.hidden2 = true;
    this.hidden3 = true;
  }
  displayTwo(){
    this.hidden1 = true;
    this.hidden2 = false;
    this.hidden3 = true;
  }
  displayThree(){
    this.hidden1 = true;
    this.hidden2 = true;
    this.hidden3 = false;
  }

  GoToGithub(){
    window.location.href = "https://github.com/DakotaJKorn";
  }

  GoToFacebook(){
    window.location.href = "https://www.facebook.com/DakotaKorn/";
  }

}
