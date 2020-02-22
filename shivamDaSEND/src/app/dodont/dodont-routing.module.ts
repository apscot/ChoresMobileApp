import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodontPage } from './dodont.page';

const routes: Routes = [
  {
    path: '',
    component: DodontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodontPageRoutingModule {}
