import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../components/blocks/Header';

import { useStyles } from '../hooks/style';

export const HomeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Header />
    </SafeAreaView>
  );
};
