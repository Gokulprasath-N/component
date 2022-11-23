import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"log-in",component:LogInComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
