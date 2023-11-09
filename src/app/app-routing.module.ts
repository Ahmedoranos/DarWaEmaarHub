import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstStepComponent } from './components/first-step/first-step.component';



const routes: Routes = [
  {path:'firstpage',component:FirstStepComponent},
  {path:'',redirectTo:'/firstpage',pathMatch:'full'}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






