import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { RouterModule } from '@angular/router';

import { ReversePipe } from './pipe/reverse.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
