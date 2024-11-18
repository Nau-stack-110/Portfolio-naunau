import { Component } from '@angular/core';
import { Skills } from '../skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {
  skills : Skills[] = [
    {
      id:1,
      name:'Angular',
      img:'Angular.png',
    },
    {
      id:2,
      name:'Node',
      img:'node.png',
    },
    {
      id:3,
      name:'Python',
      img:'Python.png',
    },
    {
      id:4,
      name:'Djnago',
      img:'django.png',
    },
    {
      id:5,
      name:'React',
      img:'react.png',
    },
    {
      id:6,
      name:'Taiwind',
      img:'Tailwind.png',
    },
    {
      id:7,
      name:'Github',
      img:'github.png',
    },
    {
      id:8,
      name:'Linux',
      img:'Linux.png',
    },
    {
      id:9,
      name:'Figma',
      img:'figma.png',
    },
  ];
}
