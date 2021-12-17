import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  appComp: any = '';
  
  constructor(private appComponent: AppComponent) { 
    this.appComp = appComponent;
  }

  ngOnInit(): void {
  }

  sideLabelClicked(){
    this.appComponent.toggleExpanded();
  }

}
