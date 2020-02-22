import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilydetailsPageRoutingModule } from './familydetails-routing.module';

import { FamilydetailsPage } from './familydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilydetailsPageRoutingModule
  ],
  declarations: [FamilydetailsPage]
})
export class FamilydetailsPageModule {}
