import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export const IntroScreen: React.FC<Props> = ({ navigation }) => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Icon name="wand-magic-sparkles" />
      <Text style={appStyles.text}>Intro</Text>
      <Button title="Scan" onPress={() => navigation.navigate('Code')} />
    </SafeAreaView>
  );
};
