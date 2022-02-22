import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';
import {HttpTestingController } from '@angular/common/http/testing';
describe('CharactersService', () => {
  let service: CharactersService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersService);
    
  });

  describe('getCharactersById', () => {
    it('returned Observable should match the right data', () => {
      const mockCharacters = [
        { name: {
          first: "Philip",
          middle: "Jay",
          last: "Fry"},
          gender: "Male",
          age: "25",
        }
      ];
  
      service.getCharactersById(1)
        .subscribe(data => {
            expect(data.name.first).toEqual('Philip');
            expect(data.name.middle).toEqual('Jay');
            expect(data.name.last).toEqual('Fry');
            expect(data.gender).toEqual('Male');
            expect(data.age).toEqual('25');
        });
  
      const req = httpTestingController.expectOne(
        'http://localhost:4200/characters/1'
      );
  
      req.flush(mockCharacters);
    });
  });
});
