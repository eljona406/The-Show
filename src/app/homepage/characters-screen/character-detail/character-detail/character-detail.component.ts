import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private charactersService : CharactersService,
    private router : Router) { }

  ngOnInit(): void {
  }
/// get by id 
}
