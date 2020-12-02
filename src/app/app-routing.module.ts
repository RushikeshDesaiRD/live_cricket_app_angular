import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { TeamComponent } from './components/team/team.component';
import { PlyersComponent } from './components/plyers/plyers.component';
import { PlyerComponent } from './components/plyer/plyer.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'team',
    component: TeamComponent
  },
  {
    path: 'players',
    component:PlyersComponent
  },
  {
    path: 'player/:id',
    component: PlyerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
