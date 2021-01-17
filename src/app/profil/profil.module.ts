import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilComponent } from './profil.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { ProfilItemComponent } from './list-profil/profil-item/profil-item.component';

import { AddProfilComponent } from './list-profil/add-profil/add-profil.component';
import { EditProfilComponent } from './list-profil/edit-profil/edit-profil.component';

import { ProfilRoutingModule } from './profil-routing.module';



@NgModule({
  declarations: [
    ProfilComponent,
    ListProfilComponent,
    ProfilItemComponent,
    AddProfilComponent,
    EditProfilComponent,
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
