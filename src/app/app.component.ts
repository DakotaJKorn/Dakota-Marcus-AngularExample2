import { Component } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example2';

  isExpanded = true;

  
  toggleExpanded(){
   this.isExpanded = !this.isExpanded;
  }


}
