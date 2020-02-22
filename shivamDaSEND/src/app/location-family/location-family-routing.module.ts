import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationFamilyPage } from './location-family.page';

const routes: Routes = [
  {
    path: '',
    component: LocationFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationFamilyPageRoutingModule {}
