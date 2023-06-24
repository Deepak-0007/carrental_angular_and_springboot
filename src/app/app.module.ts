import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarrentalListComponent } from './carrental-list/carrental-list.component';
import { CreateCarrentalComponent } from './create-carrental/create-carrental.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CarrentalListComponent,
    CreateCarrentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
