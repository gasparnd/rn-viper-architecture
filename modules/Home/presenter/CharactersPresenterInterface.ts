import { CharacterEntity } from '../entities/CharacterEntity';
import { GetCharacterParams } from '../interactor/CharactersInteractorInterface';

export interface CharactersPresenterInterface {
  getCharactaters: (params: GetCharacterParams) => void;
  characters: CharacterEntity[];
  fetchNextCharactersPage: () => void;
  loading: boolean;
}
