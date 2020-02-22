import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationFamilyPageRoutingModule } from './location-family-routing.module';

import { LocationFamilyPage } from './location-family.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationFamilyPageRoutingModule
  ],
  declarations: [LocationFamilyPage]
})
export class LocationFamilyPageModule {}
