import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LogisticStageItemComponent } from 'src/app/shared/components/logistic-stage-item/logistic-stage-item.component';

const COMPONENTS = [
  HeaderComponent,
  LogisticStageItemComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
