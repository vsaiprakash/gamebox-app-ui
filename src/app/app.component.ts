import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamebox-app-ui';

  constructor(){
    window.addEventListener("storage", () => {
      // do your checks to detect
      console.log("App: Method 1: storage change detected");
    });

    window.onstorage = () => {
      console.log("App: Method 2: storage change detected");
    };
  }
}
