import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './characters-screen/character-detail/character-detail/character-detail.component';

const materialModules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: [
    CharacterDetailComponent
  ],
})
export class MaterialModule { }