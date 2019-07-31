import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: '**', redirectTo: 'plans' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PagesModule { }
