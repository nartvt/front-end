import { Component } from '@angular/core';

@Component({ // if doesnt have this , is normal  class
  selector: 'app-root',  //id , doesnt any selector dupticate 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe23Angular';
}
