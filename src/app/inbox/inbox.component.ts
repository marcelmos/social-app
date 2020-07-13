import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Animation

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
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
export class InboxComponent implements OnInit {

  inboxContent = [
    {from: 'mosmarcel00@gmail.com', date: '13-07-2020', title: 'Job done. Can you review it?'},
    {from: 'billykenney@uilove.com', date: '09-07-2020', title: 'Send me back this Bamboo Branding.'},
    {from: 'system@uilove.com', date: '08-07-2020', title: 'Turn on now your two step account verification.'},
    {from: 'creativeMike@gmail.com', date: '08-07-2020', title: 'Need new logo design.'},
    {from: 'mosmarcel00@gmail.com', date: '13-07-2020', title: 'Job done. Can you review it?'}
  ];

  constructor(public menuStatus: InteractionService) { }

  ngOnInit(): void {
  }

}
