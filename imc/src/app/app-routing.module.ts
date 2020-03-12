import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImcComponent} from './imc/imc.component';
//import {CalcukadoraComponent} from './calculadora/calculadora.component'


const routes: Routes = [
  {path:'imc',component: ImcComponent}
  //{path:'calculadora', component: CalculadoraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
