import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
   characters!: Characters[];
  constructor(private charactersService : CharactersService,
              private router : Router) { }

  ngOnInit(): void {
    this.getCharacters()
  }
// get the character list
  getCharacters(){
    this.charactersService.showCharacters().subscribe(data =>{
      console.log(data)
      this.characters = data
      console.log(this.characters)
      console.log(this.characters.length)
      console.log(this.characters[0].images.main)
    })
  }
  // go to the details for the selected character
  seeDetails(id: number){
    this.router.navigate(['characters',id]);
  }
}
