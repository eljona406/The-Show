import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/home-screen/home/homepage.component';
import { QuizComponent } from './homepage/quiz-screen/quiz/quiz.component';
import { CharactersComponent } from './homepage/characters-screen/characters/characters.component';
import { NavigatioComponent } from './homepage/navigation/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MaterialModule } from './homepage/material.module';
import { ChangeBackgroundDirective } from './change-background.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QuizComponent,
    CharactersComponent,
    NavigatioComponent,
    ChangeBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
