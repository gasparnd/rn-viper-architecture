import { useMemo } from 'react';
import HomeView from './HomeView';
import { ApiClientManager } from 'managers/ApiClientManager';
import { RemoteCharactersInteractor } from './interactor/RemoteCharactersInteractor';
import { ApiClientManagerInterface } from 'managers/ApiClientManagerInterface';
import { useCharactersPresenter } from './presenter/useCharactersPresenter';
import { CharactersPresenterInterface } from './presenter/CharactersPresenterInterface';
import { CharacterEntity } from './entities/CharacterEntity';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { MuckCharacatersInteractor } from './interactor/MuckCharactersInteractor';

export const SCREEN_TITLE = 'Characters list';
type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeScreenProps = undefined;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const interactor = useMemo(() => {
    const apiClient: ApiClientManagerInterface = new ApiClientManager(
      'https://rickandmortyapi.com/api'
    );
    const charactersInteractor = new RemoteCharactersInteractor(apiClient);
    // const charactersInteractor = new MuckCharacatersInteractor();
    return charactersInteractor;
  }, []);

  const presenter: CharactersPresenterInterface = useCharactersPresenter(interactor);

  function showCharacterDetails(character: CharacterEntity) {
    navigation.navigate('Details', { character });
  }

  return (
    <HomeView
      characters={presenter.characters}
      loading={presenter.loading}
      fetchCharacters={presenter.fetchNextCharactersPage}
      showCharacterDetails={showCharacterDetails}
    />
  );
}
