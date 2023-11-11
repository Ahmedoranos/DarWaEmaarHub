import { Component, DoCheck } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements DoCheck
{
    dir!:string;
    constructor(public translate:TranslateService) {}
  ngDoCheck(): void {

   if(this.translate.currentLang ==='ar')
      this.dir = 'rtl';
    else
    this.dir = 'ltr';
   


  };




  
}
