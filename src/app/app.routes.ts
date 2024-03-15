
import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

export const routes: Routes = [
    { path: 'create-contact', component: CreateContactComponent},
    { path: 'lista', component: ListaComponent },
    { path: 'edit-contact', component: EditContactComponent },
];

