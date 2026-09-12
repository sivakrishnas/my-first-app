import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ServiceListPageComponent } from './pages/service-list/service-list-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services/:category', component: ServiceListPageComponent },
  { path: '**', redirectTo: '' },
];
