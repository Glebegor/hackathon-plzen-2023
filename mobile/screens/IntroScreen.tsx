import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';

import { Icon } from '../components/elements/Icon';

import { useStyles } from '../hooks/style';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export const IntroScreen: React.FC<Props> = ({ navigation }) => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.introWrapper}>
      <View style={styles.wrap}>
        <Icon name="qrcode" style={appStyles.introIcon} size={72} />
        <Text style={appStyles.introTitle}>Načtěte QR vašeho lůžka</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Code')}
        style={appStyles.introButton}
      >
        <Text style={appStyles.text}>Scan</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
