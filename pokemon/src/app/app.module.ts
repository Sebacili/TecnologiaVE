import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PokemonIdComponent,
    PokemonListComponent
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
