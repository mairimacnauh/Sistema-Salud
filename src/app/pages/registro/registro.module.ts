import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistroComponent} from './registro.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: RegistroComponent}
];

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistroModule {
}
