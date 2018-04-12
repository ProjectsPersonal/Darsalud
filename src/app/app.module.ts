import {routes} from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//import { MyDatePickerModule } from 'angular4-datepicker';
import { PacienteComponent } from './paciente/paciente.component';
import { NavbarComponent } from './navbar.component';
import { MainComponent } from './main/main.component';
import { ListaComponent } from './lista.component';
import { ChatComponent } from './chat.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    NavbarComponent,
    MainComponent,
    ListaComponent,
    ChatComponent,
    TicketComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
  //  MyDatePickerModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
