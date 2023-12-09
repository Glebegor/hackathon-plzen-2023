import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { IntroScreen } from './screens/IntroScreen';
import { CodeScreen } from './screens/CodeScreen';
import { MoodScreen } from './screens/MoodScreen';
import { TellUsScreen } from './screens/TellUsScreen';
import { WhisperScreen } from './screens/WhisperScreen';
import { NurseScreen } from './screens/NurseScreen';
import { GameScreen } from './screens/GameScreen';

export type RootStackParamList = {
  Home: undefined;
  Intro: undefined;
  Code: undefined;
  Mood: undefined;
  TellUs: undefined;
  Whisper: undefined;
  Nurse: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Intro"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="TellUs" component={TellUsScreen} />
        <Stack.Screen name="Whisper" component={WhisperScreen} />
        <Stack.Screen name="Nurse" component={NurseScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
