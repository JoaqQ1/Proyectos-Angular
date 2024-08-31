import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    Ejercicio1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  link:string = "";
  
}


// title = 'Joaquin';
// apellido:string = "";// ! -> Me deja instanciar una variable sin inicializarla
// imagen:string = "https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420.jpg"
// mostrarDatos() : void {
  //   console.log("tu apellido es: " + this.apellido);
// }