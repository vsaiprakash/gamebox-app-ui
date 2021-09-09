import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gamebox-app-ui';

  constructor(public langService: LanguageService){

    langService.setDefaultLang();

    window.addEventListener("storage", () => {
      // do your checks to detect
      console.log("App: Method 1: storage change detected");
    });

    window.onstorage = () => {
      console.log("App: Method 2: storage change detected");
    };
  }
}
