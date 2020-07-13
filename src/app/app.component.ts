import { Component } from '@angular/core';
import { InteractionService } from './services/interaction.service';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Animation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('profileAnim', [
    state('initial', style({
      transform: 'translateX(0)'
    })),
    state('final', style({
      transform: 'translateX(80%)'
    })),
    transition('initial => final', animate('200ms')),
    transition('final => initial', animate('200ms'))
  ])]

})
export class AppComponent {

  constructor(public menuStatus: InteractionService){ }

}
