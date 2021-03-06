import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './homepage/characters-screen/character-detail/character-detail/character-detail.component';
import { CharactersComponent } from './homepage/characters-screen/characters/characters.component';
import { HomepageComponent } from './homepage/home-screen/home/homepage.component';
import { QuizComponent } from './homepage/quiz-screen/quiz/quiz.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch   : 'full',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
