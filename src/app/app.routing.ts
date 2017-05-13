import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'heroes',
    component: CharacterListComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
