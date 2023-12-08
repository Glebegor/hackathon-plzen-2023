import React from 'react';
import { SafeAreaView, Text, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

import type { BarCodeReadEvent } from 'react-native-camera';

export const CodeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  const onScan = (e: BarCodeReadEvent) => {
    Alert.alert(e.data);
  };
  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Icon name="qrcode" />
      <Text style={appStyles.text}>Scan</Text>
      <QRCodeScanner
        onRead={onScan}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </SafeAreaView>
  );
};
