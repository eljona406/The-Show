import { CharactersName } from "./characterName.model";
import { CharactersImage } from "./charactersImage.model";

export interface Characters{
    name: CharactersName;
    images : CharactersImage;
    gender :string;
    species :string;
    homePlanet :string;
    occupation :string;
    sayings :string;//ARRAYY
    id :number;
    age :string;
}