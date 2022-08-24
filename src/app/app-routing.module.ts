import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffComponent } from './home/stuff/stuff.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/product', component: StuffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
