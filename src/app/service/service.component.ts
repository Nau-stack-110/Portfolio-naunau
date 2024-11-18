import { Component } from '@angular/core';
import { Service } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services : Service[] = [
    {
      id:1,
      name:'Web developpement',
      description:'I excel in crafting responsive and feature-rich websites. From front-end design to back-end functionality, I bring together the best practices in HTML, CSS, JavaScript,angular framework and server-side programming to deliver seamless user experiences.',
      img:'web2.jpeg',
    },
    {
      id:2,
      name:'Mobile developpement',
      description:'With a keen eye for aesthetics and a deep understanding of user-centered design principles, I have a knack for creating visually stunning and intuitive web designs that captivate users and elevate their online experience.',
      img:'mobile2.png',
    },
    {
      id:3,
      name:'Game Developpement',
      description:'Drawing from my passion for gaming and extensive knowledge of game design principles, I specialize in engaging gameplay experiences that blend captivating storytelling, intuitive mechanics, and stunning visuals, bringing virtual worlds to life.',
      img:'game.png',
    },
  ];
}
