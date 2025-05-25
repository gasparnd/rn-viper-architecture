import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { CharacterEntity } from 'modules/Home/entities/CharacterEntity';

export interface CharacterDetailsViewProps {
  character: CharacterEntity;
}
export default function CharacterDetailsView({ character }: CharacterDetailsViewProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Status: {character.status}</Text>
      <Text style={styles.info}>Species: {character.species}</Text>
      <Text style={styles.info}>Gender: {character.gender}</Text>
      <Text style={styles.info}>Origin: {character.origin.name}</Text>
      <Text style={styles.info}>Location: {character.location.name}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
});
