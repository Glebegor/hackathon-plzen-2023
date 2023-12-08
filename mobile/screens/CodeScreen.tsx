import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { useStyles } from '../hooks/style';

import type { BarCodeReadEvent } from 'react-native-camera';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export const CodeScreen: React.FC<Props> = ({ navigation }) => {
  const { appStyles } = useStyles();

  const onScan = (e: BarCodeReadEvent) => {
    const code = e.data;
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <QRCodeScanner
        onRead={onScan}
        flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate
        reactivateTimeout={1000}
        cameraStyle={styles.cameraContainer}
        cameraContainerStyle={styles.cameraContainer}
        containerStyle={styles.cameraContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    height: '100%',
  },
});
