import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InsertComponent } from './insert/insert.component';
import {Route} from './app.lazy.routing';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ,RouterModule,Route,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, InsertComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
