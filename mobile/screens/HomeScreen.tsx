import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

export const HomeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Icon name="house" />
      <Text style={appStyles.text}>Home</Text>
    </SafeAreaView>
  );
};
