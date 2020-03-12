import {Component} from '@angular/core';

@Component({
  selector:'imc-component'
  ,templateUrl:'imc.component.html'
  ,styleUrls:['imc.component.css']

})
export class ImcComponent {
  valor1: number;
  valor2: number;


  calcular() : void {
      let calc = Number(this.valor1) / ( Number(this.valor2) * Number(this.valor2));
      // alert(calc);
      let ideal: Number = 24.9 *  ( Number(this.valor2) * Number(this.valor2));
      // alert(ideal);


      // alert('test hi');
      let resultado='';
      if(calc < 18.4 ){
        resultado = 'Você esta com desnutrição grau I e seu peso ideal seria de'+ Math.round(ideal);
      }
      else if(calc < 25 && calc >= 18.5){
        resultado='Você esta no peso ideal parabéns'+ Math.round(ideal);
      }
      else if(calc < 36 && calc >= 18.6) {
        resultado='Voce esta obeso seu peso ideal seria '+ Math.round(ideal);

      }
      alert(resultado);
  }

}
