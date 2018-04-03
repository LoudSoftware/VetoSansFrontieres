import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by 2 uOttawa students using
      <b><a href="https://akveo.com" target="_blank"> Akveo</a>, Angular 5, Express and Node.js</b> 2018</span>
    <div class="socials">
      <a href="https://github.com/LoudSoftware/VetoSansFrontieres" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
