import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/Base/login/login.component';
import { MenuComponent } from './components/Base/menu/menu.component';
import { SidenavComponent } from './components/Base/sidenav/sidenav.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
