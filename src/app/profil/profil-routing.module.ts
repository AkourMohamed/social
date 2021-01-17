import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfilComponent } from './list-profil/add-profil/add-profil.component';
import { EditProfilComponent } from './list-profil/edit-profil/edit-profil.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { ProfilItemComponent } from './list-profil/profil-item/profil-item.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {path: '', component: ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
