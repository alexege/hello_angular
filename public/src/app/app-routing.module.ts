import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/movies'},
  {path: "movies", component: HomeComponent, children:[
    {path: "new", component: AddMovieComponent},
  ]},
  {path: "movies/read_review", component: DetailsComponent},
  {path: "movies/write_review", component: AddReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
