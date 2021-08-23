import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OsobyService } from './osoby.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JedenComponent } from './jeden/jeden.component';
import { DwaComponent } from './dwa/dwa.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    JedenComponent,
    DwaComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [OsobyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
