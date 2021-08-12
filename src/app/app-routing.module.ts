import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRouteComponent } from '@shared/components/empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'app2',
    children: [
      {
        path: '', // here name for child root
        loadChildren: () =>
          import('@feature/example-module/example.module')
          .then(m => m.ExampleModule)
      }
    ]
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
