import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';




@Component({
  selector: 'app-marcus',
  templateUrl: './marcus.component.html',
  styleUrls: ['./marcus.component.css']
})



export class MarcusComponent implements OnInit {

  MarcusInfo: any;
  Clicked : boolean = false;
  selected : any;

  constructor(private infoService: InfoService) { 
    this.MarcusInfo = infoService.getMarcusInfo();
  }


  ngOnInit(): void {
  }

  buttonClicked(){
    this.Clicked = !this.Clicked;
  }
}

