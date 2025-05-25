import { CharacterResponseEntity } from '../entities/CharacterResponseEntity';

export interface GetCharacterParams {
  page: number;
}

export interface CharactersInteractorInterface {
  getCharactaters: (params: GetCharacterParams) => Promise<CharacterResponseEntity>;
}
