import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  isActivated: boolean;
  isOpend = 'main';

  // Animation State Variablesą
  currentState = 'initial';


  constructor() { }

  navMenu(){
    this.isActivated = !this.isActivated;
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    console.log('Menu status: ' + this.isActivated);
  }
}
