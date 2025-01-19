import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from "./app/main-page/main-page.component";
import { HeaderComponent } from "./app/shared/header/header.component";
import { FooterComponent } from "./app/shared/footer/footer.component";


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
