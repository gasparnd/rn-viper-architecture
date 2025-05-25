import { ApiClientManagerInterface } from 'managers/ApiClientManagerInterface';
import { CharacterResponseEntity } from '../entities/CharacterResponseEntity';
import { CharactersInteractorInterface, GetCharacterParams } from './CharactersInteractorInterface';

export class RemoteCharactersInteractor implements CharactersInteractorInterface {
  private apiClient;

  constructor(apiClient: ApiClientManagerInterface) {
    this.apiClient = apiClient;
  }

  async getCharactaters(params: GetCharacterParams): Promise<CharacterResponseEntity> {
    const response = await this.apiClient.get<CharacterResponseEntity>(
      `/character/?page=${params.page}`
    );
    return response;
  }
}
