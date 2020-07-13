import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Animation

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuAnim', [
      state('initial', style({
        transform: 'translateX(-100%)'
      })),
      state('final', style({
        transform: 'translateX(0)'
      })),
      transition('initial => final', animate('200ms')),
      transition('final => initial', animate('200ms'))
    ])]
})
export class MenuComponent implements OnInit {

  notificationInbox = 5;
  notificationFriends = 25;
  notificationInvites = 1;

  constructor(public menuStatus: InteractionService) { }

  ngOnInit(): void {
  }



}
