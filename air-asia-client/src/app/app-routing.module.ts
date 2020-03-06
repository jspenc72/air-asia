import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LoginComponent }  from './login/login.component';
import  { CardListComponent }  from './card-list/card-list.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }, 
{ path: 'card-list', component: CardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
