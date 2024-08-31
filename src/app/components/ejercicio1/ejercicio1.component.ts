import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  edadUno: number | any; 
  edadDos: number | any; 
  promedio: number | any; 
  suma: number | any ; 
  mostrarDatos(){
    
    this.promedio = (this.edadUno + this.edadDos) / 2;
    this.suma = this.edadUno + this.edadDos;
    if(isNaN(this.promedio) || isNaN(this.suma)){
      this.promedio = 0;
      this.suma = 0;
    }
    
  }
  ocultarDatos(){
    this.promedio = '';
    this.suma = '';
  }

}
