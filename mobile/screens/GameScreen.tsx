import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Header } from '../components/blocks/Header';

import { useStyles } from '../hooks/style';

export const GameScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Header />
      <Text style={appStyles.text}>Games</Text>
    </SafeAreaView>
  );
};
