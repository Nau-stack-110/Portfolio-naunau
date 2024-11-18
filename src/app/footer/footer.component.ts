import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  author = "Andriatahiana Arnaud"
  date = new Date()
  year = this.date.getFullYear();
}
