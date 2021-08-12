import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

const modules = [
  CommonModule,
  RouterModule
];

const components = [
  EmptyRouteComponent,
  NopagefoundComponent
];

@NgModule({
  declarations: [components],
  imports: [modules],
  exports: [components, modules]
})
export class SharedModule { }