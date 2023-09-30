import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HelpesComponent } from './helpes/helpes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ComComponent } from './com/com.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: "help", component: HelpesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'com', component: ComComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
