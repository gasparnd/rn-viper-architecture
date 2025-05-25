import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CharacterEntity } from 'modules/Home/entities/CharacterEntity';

export interface CharactersCardProps {
  character: CharacterEntity;
  onPress: (character: CharacterEntity) => void;
}

export default function CharactersCard({ character, onPress }: CharactersCardProps) {
  function handleOnPress() {
    onPress(character);
  }

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  species: {
    color: '#666',
  },
});
