import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "src/app/main/main.component";
import {AboutComponent} from "src/app/about/about.component";
import {NewsComponent} from "src/app/news/news.component";
import {NotFoundComponent} from "src/app/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news/:id', component: NewsComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [MainComponent, AboutComponent, NotFoundComponent, NewsComponent]
