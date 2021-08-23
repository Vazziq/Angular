import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OsobyService } from './osoby.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JedenComponent } from './jeden/jeden.component';
import { DwaComponent } from './dwa/dwa.component';
@NgModule({
  declarations: [
    AppComponent,
    JedenComponent,
    DwaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [OsobyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
