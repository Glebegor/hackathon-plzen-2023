import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Header } from '../components/blocks/Header';
import { BackButton } from '../components/blocks/BackButton';

import { useStyles } from '../hooks/style';

export const MoodScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Header />
      <Text style={appStyles.text}>Mood</Text>
      <BackButton />
    </SafeAreaView>
  );
};
