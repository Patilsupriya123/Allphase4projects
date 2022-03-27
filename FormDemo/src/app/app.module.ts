import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './HighlightDirective';
import { CustomPipe } from './CustomPipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    SwitchdemoComponent,
    PipedemoComponent,
    HomeComponent,
    HighlightDirective,
    CustomPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
