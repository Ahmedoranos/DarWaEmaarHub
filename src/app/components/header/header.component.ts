import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


constructor(public translate:TranslateService) {}

isEnglish!:boolean;



  changeLanguage(e:any):void
  {
    if(e)
    {
      console.log("notchecked");
      this.translate.use('ar')

    }
    else
    {
     
      console.log("chekced");
      this.translate.use('en')
    }
  }
}
