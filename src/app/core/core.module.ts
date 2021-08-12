import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ExampleService } from './services/example.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ExampleService
  ]
})
export class CoreModule { }