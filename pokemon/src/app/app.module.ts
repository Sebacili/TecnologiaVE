import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListatypeComponent } from './listatype/listatype.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemoninsiderinfoComponent } from './pokemoninsiderinfo/pokemoninsiderinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    ListatypeComponent,
    PokemonComponent,
    PokemoninsiderinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }