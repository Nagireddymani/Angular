import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


const routes: Routes = [
  {
    path :"group-view"  , component : GroupsListComponent
  },
  {
    path :"search-group", component: SearchGroupComponent
  },
  {
    path :"view/:index" , component : ContactListComponent
  },
  {
    path :"add/:index"  , component : AddContactComponent
  },
  {
    path :'update/:index' ,component : UpdateContactComponent
  }
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
