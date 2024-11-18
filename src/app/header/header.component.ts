import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navigHome = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }
  constructor(private ren: Renderer2){}
  downloadFile(){
    const link = this.ren.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'cvako.pdf');
    link.setAttribute('download', 'cvako.pdf');
    link.click();
    link.remove();
  }
}
