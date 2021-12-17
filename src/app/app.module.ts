import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DakotaComponent } from './dakota/dakota.component';
import { MarcusComponent } from './marcus/marcus.component';

import { InfoService } from './info.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { MarcusPictureComponent } from './marcus-picture/marcus-picture.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { DakotaTableComponent } from './dakota-table/dakota-table.component';



@NgModule({
  declarations: [
    AppComponent,
    DakotaComponent,
    MarcusComponent,
    SideMenuComponent,
    
    ProfilePictureComponent,
         HomeComponent,
         MarcusPictureComponent,
         InfoBoxComponent,
         DakotaTableComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
 
  ],
  providers: [
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
