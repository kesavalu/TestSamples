import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: 'base',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: '/base'},
      
    ]
  }
];
export const BaseRoutesModule = RouterModule.forChild(routes);