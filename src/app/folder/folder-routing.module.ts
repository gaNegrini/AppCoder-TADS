import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AprenderComponent } from './components/aprender/aprender.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Aprender',
    component: AprenderComponent
  },
  {
    path: 'Perfil',
    component: PerfilComponent
  },
  {
    path: 'Sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
