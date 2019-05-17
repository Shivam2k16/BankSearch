import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { BanksComponent } from './banks/banks.component';

const routes: Routes = [
  {
    path: 'bank',
    component: HomeComponent
  },
  {
    path: 'banks/:id',
    component: BanksComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ]
  },
  {
    path: 'favour',
    component: FavouritesComponent
  },
  { path: '', redirectTo: 'bank', pathMatch: 'full' },
  { path: '**', redirectTo: 'bank'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
