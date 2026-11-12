import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  styleUrls: ['./components/new-component/new-component.component.scss'],
  template: `
  <!-- <router-outlet />  -->

  <h1> Curso de Angular</h1>
  <app-new-component/>

  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//syle respeita primeiro o componente, depois o scss e depois o global

//ng para iniciar - g de generetaded - c de components e depois a pasta