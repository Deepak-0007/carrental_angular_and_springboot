import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrentalListComponent } from './carrental-list/carrental-list.component';
import { CreateCarrentalComponent } from './create-carrental/create-carrental.component';
const routes: Routes = [
  {path: 'carrental', component: CarrentalListComponent},
  {path: 'create-carrental', component: CreateCarrentalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
