import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthModule } from './layouts/auth/auth.module';
import { SharedComponent } from './shared/components/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatDialogModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
