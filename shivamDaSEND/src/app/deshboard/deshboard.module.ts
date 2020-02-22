import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeshboardPageRoutingModule } from './deshboard-routing.module';

import { DeshboardPage } from './deshboard.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeshboardPageRoutingModule
  ],
  declarations: [DeshboardPage]
})
export class DeshboardPageModule {}
