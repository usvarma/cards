import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {title: "Neat Tree", username:"@nature", imgurl: "assets/tree.jpeg", content:"Saw a cool tree during my hike today."},
    {title: "Snowy Mountain", username:"@mountainlover", imgurl: "assets/mountain.jpeg", content:"Mountain scenes during current fall."},
    {title: "My lovely bike", username:"@bikerider", imgurl: "assets/biking.jpeg", content:"My new bike."},
  ];
}
