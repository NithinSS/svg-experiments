import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnelComponent } from './funnel/funnel.component';

/**
 * Module holds all charts and graphs constructed as SVGs
 */
@NgModule({
  declarations: [
    FunnelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
