import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/modules/navigation/navigation.module').then(m => m.NavigationModule),
  },
  {
    path:'',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
