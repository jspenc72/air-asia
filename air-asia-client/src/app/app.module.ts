import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardUpdateComponent } from './card-update/card-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardListComponent,
    CardDetailsComponent,
    CardAddComponent,
    CardUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
