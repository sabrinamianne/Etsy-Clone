import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AdminComponent} from './admin/admin.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
   path: 'admin/marketplace',
   component: MarketplaceComponent
 },
 {
  path: 'products/:id',
  component: ProductDetailComponent
 }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
