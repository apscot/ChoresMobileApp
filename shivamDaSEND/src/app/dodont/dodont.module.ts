import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodontPageRoutingModule } from './dodont-routing.module';

import { DodontPage } from './dodont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodontPageRoutingModule
  ],
  declarations: [DodontPage]
})
export class DodontPageModule {}

