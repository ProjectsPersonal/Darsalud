import {Routes, RouterModule} from "@angular/router";
import {PacienteComponent} from "./paciente/paciente.component";
import {TicketComponent} from "./ticket/ticket.component";
import {MainComponent} from "./main/main.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo:'/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'paciente', component: PacienteComponent},
  { path: 'asigna', component: TicketComponent},
];

export const routes:ModuleWithProviders =RouterModule.forRoot(appRoutes);
