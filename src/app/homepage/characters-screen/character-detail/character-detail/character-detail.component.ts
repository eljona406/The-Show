import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from 'src/app/model/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  id!: number;
  characterDetails!: Characters;
  sayings!: Array<string>;
  sayingQuote!: string;

  constructor(private charactersService : CharactersService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getCharactersById(this.id)
  }
/// get by id 
getCharactersById(id:number){
  this.charactersService.getCharactersById(id).subscribe(data=>{
    console.log(data,'by iddddd')
    this.characterDetails = data;
    console.log(this.characterDetails)
    //json api not responding...........
  });
}
goBackToCharacterList(){
  this.router.navigate(['/characters']);
}
}
