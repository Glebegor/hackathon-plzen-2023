import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

import type { BarCodeReadEvent } from 'react-native-camera';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export const CodeScreen: React.FC<Props> = ({ navigation }) => {
  const [flashlightOn, setFlashlightOn] = useState<boolean>(false);
  const { appStyles } = useStyles();

  const onScan = (e: BarCodeReadEvent) => {
    const code = e.data;
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <QRCodeScanner
        onRead={onScan}
        flashMode={
          flashlightOn
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        reactivate
        reactivateTimeout={500}
        cameraStyle={styles.cameraContainer}
        cameraContainerStyle={styles.cameraContainer}
        containerStyle={styles.cameraContainer}
        showMarker
        markerStyle={styles.marker}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setFlashlightOn((prev) => !prev)}>
          <Icon name="bolt-lightning" style={styles.controlIcon} size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    height: '100%',
  },
  marker: {
    borderColor: '#fff',
  },
  controls: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    padding: 24,
  },
  controlIcon: {
    color: '#fff',
  },
});
