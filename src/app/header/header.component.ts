import { Component, Output, EventEmitter} from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageUrl:string = '';
  valorRecibido: any;

  mostrarMenu: boolean = false;

  toggleMenu(): void {
    this.mostrarMenu = !this.mostrarMenu;
  }

  constructor(private router: Router, private authService: AuthService){
    this.valorRecibido = this.authService.getValor();
    console.log(this.valorRecibido)
  }
  ngOnInit(){

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // URL de la imagen base con el número 30
    const baseUrl = 'https://randomuser.me/api/portraits/women/30.jpg';

    // Reemplazar el número en la URL con el número aleatorio generado
    this.imageUrl = baseUrl.replace(/women\/\d+/, `women/${numeroAleatorio}`);
  }

  navegarD(){
    this.router.navigate(['/pokemon-table'])
  }
  navegarP(){
    this.router.navigate(['/pokemon-list-component'])
  }

  
}
