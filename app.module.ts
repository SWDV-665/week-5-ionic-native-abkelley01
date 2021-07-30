import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GroceriesServiceService } from './groceries-service.service';
import { InputDialogService } from './input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }, GroceriesServiceService, InputDialogService, SocialSharing],
  bootstrap: [AppComponent],
})
export class AppModule {}
