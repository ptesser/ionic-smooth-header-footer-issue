import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from 'src/app/pages/auth/auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'plans',
        loadChildren: './plans/plans.module#PlansPageModule',
      },
      {
        path: 'stages',
        loadChildren: './logistics-stages/logistics-stages.module#LogisticsStagesPageModule',
      },
      {
        path: 'logistic-stage-detail/:id',
        loadChildren: './logistic-stage-detail/logistic-stage-detail.module#LogisticStageDetailPageModule'
      },
      {
        path: 'customer-jobs',
        loadChildren: './customer-jobs/customer-jobs.module#CustomerJobsPageModule',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthPage],
})
export class AuthPageModule {}
