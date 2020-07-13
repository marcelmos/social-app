import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';
import { trigger, state, style, animate, transition } from '@angular/animations'; // Animation


@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
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
export class InfoPanelComponent implements OnInit {

  // Social media notifications
  dribbbleMsg = 21;
  forrstMsg = 0;
  beMsg = 0;

  // Posts list array
  postList = [
    {time: '1 minute ago', from: 'Mike | Creative Mints', content: 'Mechanical Grasshopper', isWatch: true, isLiked: true, image: '/assets/images/post/phone.png'},
    {time: '21 minutes ago', from: 'Dash', content: 'Assistant App - Weather Module', isWatch: false, isLiked: true, image: '/assets/images/post/weather.png'},
    {time: '1 hours ago', from: 'Zeki Ghulam', content: 'Flat & Filthy - My upcoming web agency', isWatch: true, isLiked: false, image: '/assets/images/post/picture.png'},
    {time: '2 hours ago', from: 'Bill S Kenney', content: 'Bamboo Branding Wall Piece - not flat', isWatch: false, isLiked: false, image: '/assets/images/post/download.png'},
    {time: '3 hours ago', from: 'Mike | Creative Mints', content: 'Mechanical Grasshopper', isWatch: true, isLiked: true, image: '/assets/images/post/phone.png'},
    {time: '3 hours ago', from: 'Dash', content: 'Assistant App - Weather Module', isWatch: false, isLiked: true, image: '/assets/images/post/weather.png'},
    {time: '4 hours ago', from: 'Zeki Ghulam', content: 'Flat & Filthy - My upcoming web agency', isWatch: true, isLiked: false, image: '/assets/images/post/picture.png'},
    {time: '6 hours ago', from: 'Bill S Kenney', content: 'Bamboo Branding Wall Piece - not flat', isWatch: false, isLiked: false, image: '/assets/images/post/download.png'}
  ];

  constructor(public menuStatus: InteractionService) { }

  ngOnInit(): void {
  }

  // POST MENAGEMENT
  watchPost(postIndex: number){
    if ( this.postList[postIndex].isWatch){
      this.postList[postIndex].isWatch = false;
    } else{
      this.postList[postIndex].isWatch = true;
    }

    console.log('Edited index: ' + postIndex);
  }

  likePost(postIndex: number){
    if ( this.postList[postIndex].isLiked){
      this.postList[postIndex].isLiked = false;
    } else{
      this.postList[postIndex].isLiked = true;
    }
    console.log('Edited index: ' + postIndex);
  }

  removePost(postIndex: number){
    this.postList.splice(postIndex, 1);
    console.log('Removed index: ' + postIndex);
  }


}
