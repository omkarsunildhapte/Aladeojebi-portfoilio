import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComComponent } from './com/com.component';
import { HelpesComponent } from './helpes/helpes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/compenets/header/header.component';
import { MainComponent } from './shared/compenets/main/main.component';
import { LoaderComponent } from './shared/compenets/loader/loader.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment/environment';
import { ShortedPipe } from './shared/pipe/shorted.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    HeaderComponent,
    MainComponent,
    PortfolioComponent,
    ContactoComponent,
    ComComponent,
    HelpesComponent,
    LoaderComponent,
    ShortedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
