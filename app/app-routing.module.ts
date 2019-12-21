import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { BaseComponent } from './components/base/base.component';


const routes: Routes = [
{ path: '', component: BaseComponent},
// { path: 'layout', component: LayoutComponent},
// { path: 'layout', redirectTo: '/layout', pathMatch: 'full' },
// { path: 'base', component: BaseComponent},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
