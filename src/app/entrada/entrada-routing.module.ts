import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SlideComponent } from './components/slide/slide.component';

import { EntradaPage } from './entrada.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slide',
    component: EntradaPage
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaPageRoutingModule {}
