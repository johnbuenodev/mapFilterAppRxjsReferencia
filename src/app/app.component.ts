import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mapFilterAppRxjs';

  //numeros = of(1,0,1,1,1,0,1,0,1);

  constructor() {

  }

  public ngOnInit(): void {

    /*  Abaixo 2 formas de trabalhar com PIPE - FILTER - MAP - Of */
        
    const numeros = of(0, 2, 3, 1, 1, 6, 7);

    //Criando a função pipe Abrindo canal do processo para os dados
    const funcVerificaCalc = pipe(
      ////Filtrar
      filter((res: number) => res === 1),
      //mapear
      map(res => (res + res) * 7)
    );

    const results = funcVerificaCalc(numeros);

    //Realizando suscribe objeto 
    results.subscribe((result) => {
      console.log("resultado de Numeros: " + result);
    });

    
    const letras = of('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I');

    ///Utilizando pipe direto no List Array
    const resultado = letras.pipe(
      filter((res: string) => res == 'A' || res == 'E' || res == 'H'),
      //mapear
      map(res => res)
    );

    resultado.subscribe((res) => {
     console.log("resultado de Letras: " + res);
    })


  }
}
