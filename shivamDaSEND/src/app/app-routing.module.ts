import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'deshboard/menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'location-family',
    loadChildren: () => import('./location-family/location-family.module').then( m => m.LocationFamilyPageModule)
  },
  {
    path: 'familydetails',
    loadChildren: () => import('./familydetails/familydetails.module').then( m => m.FamilydetailsPageModule)
  },
  {
    path: 'member-details',
    loadChildren: () => import('./member-details/member-details.module').then( m => m.MemberDetailsPageModule)
  },
  {
    path: 'dodont',
    loadChildren: () => import('./dodont/dodont.module').then( m => m.DodontPageModule)
  },
  {
    path: 'deshboard',
    loadChildren: () => import('./deshboard/deshboard.module').then( m => m.DeshboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
