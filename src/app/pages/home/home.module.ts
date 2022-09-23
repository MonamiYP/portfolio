import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SocialsModule } from 'src/app/components/socials/socials.module';
import { SocialsComponent } from 'src/app/components/socials/socials.component';


@NgModule({
  imports: [
    CommonModule,
    SocialsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
