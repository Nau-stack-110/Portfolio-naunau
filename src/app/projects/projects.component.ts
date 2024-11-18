import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  project : any[] = [
    {
      id: 1,
      name : 'Web-Apps-free',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine.',
      img:'',
    },
    {
      id: 2,
      name : 'Asjackrise',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine',
      img:'',
    },
    {
      id: 3,
      name : 'Api rest with django and node',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine',
      img:'',
    },
    {
      id: 4,
      name : 'Chat-local',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine',
      img:'',
    },
    {
      id: 5,
      name : 'DominoScore Apk',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine',
      img:'',
    },
    {
      id: 6,
      name : 'Guess-Game Apk-web',
      desc :'Blue bottle crucifix vinyl post-ironic four dollar toast vegantaxidermy. Gastropub indxgo juice poutine',
      img:'',
    },
  ];
}
