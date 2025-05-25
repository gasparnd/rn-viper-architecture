import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'navigation';
import { CharacterEntity } from 'modules/Home/entities/CharacterEntity';
import CharacterDetailsView from './CharacterDetailsView';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
export type DetailsScreenProps = {
  character: CharacterEntity;
};

export default function CharacterDetailsScreen() {
  const { params } = useRoute<DetailsScreenRouteProp>();
  return <CharacterDetailsView character={params.character} />;
}
