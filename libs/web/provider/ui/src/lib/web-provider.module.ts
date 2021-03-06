import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebProviderComponent } from './web-provider.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebProviderComponent],
  exports: [WebProviderComponent ],
})
export class WebProviderModule {}
