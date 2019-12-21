import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseHttpService, AuthService, JsonService } from './services';
import { JwtInterceptor } from './services/jwt-interceptor';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,LayoutComponent, HeaderComponent, FooterComponent,LoginComponent, BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [BaseHttpService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, deps: [AuthService, Router] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
