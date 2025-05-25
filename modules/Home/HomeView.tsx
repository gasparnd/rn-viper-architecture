import { View, FlatList, ActivityIndicator } from 'react-native';
import { CharacterEntity } from './entities/CharacterEntity';
import CharactersCard from 'components/CharactersCard';

export interface HomeViewProps {
  characters: CharacterEntity[];
  loading: boolean;
  fetchCharacters: () => void;
  showCharacterDetails: (character: CharacterEntity) => void;
}

export default function HomeView({
  characters,
  loading,
  fetchCharacters,
  showCharacterDetails,
}: HomeViewProps) {
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="#00bcd4" />;
  };

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={fetchCharacters}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => {
          return <CharactersCard onPress={showCharacterDetails} character={item} key={item.id} />;
        }}
      />
    </View>
  );
}
