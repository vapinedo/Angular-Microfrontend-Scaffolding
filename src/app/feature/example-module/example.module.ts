import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from './example.component';

const modules = [
  CommonModule, 
];

const components = [
  ExampleComponent
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [modules]
})
export class ExampleModule { }