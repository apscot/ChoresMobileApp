import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeshboardPage } from './deshboard.page';

const routes: Routes = [
  {
    path: '',
    component: DeshboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeshboardPageRoutingModule {}
