import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

export const CodeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Icon name="qrcode" />
      <Text style={appStyles.text}>Scan</Text>
    </SafeAreaView>
  );
};
