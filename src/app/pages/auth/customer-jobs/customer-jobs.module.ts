import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerJobsPage } from 'src/app/pages/auth/customer-jobs/customer-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerJobsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CustomerJobsPage],
})
export class CustomerJobsPageModule {}
