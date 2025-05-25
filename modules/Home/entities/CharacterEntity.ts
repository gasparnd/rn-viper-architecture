export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  gender: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}
export interface CharacterLocation {
  name: string;
  url: string;
}
