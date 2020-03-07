import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LoginComponent }  from './login/login.component';
import  { CardListComponent }  from './card-list/card-list.component';
import  { CardDetailsComponent }  from './card-details/card-details.component';
import  { CardAddComponent }  from './card-add/card-add.component';
import  { CardUpdateComponent }  from './card-update/card-update.component';
import  { CardDeleteComponent }  from './card-delete/card-delete.component';
import  { CustAddComponent }  from './cust-add/cust-add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'card-list', component: CardListComponent },
  { path: 'card-details', component: CardDetailsComponent, data : {some_data : 'some value'} },
  { path: 'card-add', component: CardAddComponent },
  { path: 'card-update', component: CardUpdateComponent },
  { path: 'card-delete', component: CardDeleteComponent },
  { path: 'cust-add', component: CustAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
