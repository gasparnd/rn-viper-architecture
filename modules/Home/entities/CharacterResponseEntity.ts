import { CharacterEntity } from './CharacterEntity';

export interface CharacterResponseEntity {
  info: CharacterResponseInfo;
  results: CharacterEntity[];
}

export interface CharacterResponseInfo {
  count: number;
  page: number;
  next: string;
  prev: string;
}
