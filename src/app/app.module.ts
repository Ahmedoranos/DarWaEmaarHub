import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import { FifthStepComponent } from './components/fifth-step/fifth-step.component';
import { SixtyStepComponent } from './components/sixty-step/sixty-step.component';
import { FourthStepComponent } from './components/fourth-step/fourth-step.component';
import { RlgTableComponent } from './components/rlg-table/rlg-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FifthStepComponent,
    SixtyStepComponent,
    FourthStepComponent,
    RlgTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
