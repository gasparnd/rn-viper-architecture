import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen, { HomeScreenProps } from 'modules/Home/HomeScreen';
import CharacterDetailsScreen, {
  DetailsScreenProps,
} from 'modules/CharacterDetails/CharacterDetailsScreen';

export type RootStackParamList = {
  Home: HomeScreenProps;
  Details: DetailsScreenProps;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CharacterDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
