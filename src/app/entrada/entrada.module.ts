import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaPageRoutingModule } from './entrada-routing.module';

import { EntradaPage } from './entrada.page';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaPageRoutingModule
  ],
  declarations: [EntradaPage, LoginComponent, RegistroComponent]
})
export class EntradaPageModule {}
