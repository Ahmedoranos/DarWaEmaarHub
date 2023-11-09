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
import { SvgsComponent } from './components/svgs/svgs.component';
import { TwoOptionsRadioComponent } from './components/two-options-radio/two-options-radio.component';
import { SuppliessComponent } from './components/suppliess/suppliess.component';
import { SendButtonComponent } from './components/send-button/send-button.component';
import { RfqTableComponent } from './components/rfq-table/rfq-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FifthStepComponent,
    SixtyStepComponent,
    FourthStepComponent,
    SvgsComponent,
    TwoOptionsRadioComponent,
    SuppliessComponent,
    SendButtonComponent,
    RfqTableComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
    {
      defaultLanguage:'en',
      loader:
      {
        provide:TranslateLoader,
        useFactory:CreateTranslateLoader,
        deps:[HttpClient]
      }
    }       
  )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function CreateTranslateLoader(http:HttpClient)
{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}



