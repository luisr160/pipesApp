import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLowerCase:string = 'luis';
  public nameUpperCase:string = 'LUIS';
  public nameTitleCase:string = 'lUiS RoSeRo';

}
