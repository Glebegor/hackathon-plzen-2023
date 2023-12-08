import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { useStyles } from '../hooks/style';

export const HomeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Text style={appStyles.text}>Home</Text>
    </SafeAreaView>
  );
};
