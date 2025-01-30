import { Routes } from '@angular/router';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent }, 
    { path: 'data-privacy', component: DataPrivacyComponent }, 
    { path: 'imprint', component:ImprintComponent }, 
];
