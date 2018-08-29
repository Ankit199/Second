import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UpdateComponent } from './update/update.component';
import * as $ from 'jquery';
import { UserloginService } from './userlogin.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {    AngularFireModule  } from 'angularfire2';  
import {    environment  } from '../environments/environment';  
import {    AngularFireDatabaseModule } from 'angularfire2/database'; 
const appRoutes: Routes = [

  { path: '', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Home/contact', component: ContactComponent },
  { path: 'update/:id', component: UpdateComponent },


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    UserlistComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent    ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true , onSameUrlNavigation: 'reload' }),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    

  ],
  providers: [UserloginService,AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
