import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu/menu-principal/menu-principal.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path: '', component: MenuPrincipalComponent, outlet: 'menu'
  },
  {
    path: '', component: PrincipalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
