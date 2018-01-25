import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'common', pathMatch: 'full' },
  { 
    path: 'common', 
    loadChildren: './modules/common/common.module#CommonModule',
    component: MainLayoutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);