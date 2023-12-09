import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../elements/Icon';

import { useStyles } from '../../hooks/style';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../App';

export const Header: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { appStyles } = useStyles();

  return (
    <View style={appStyles.headerWrap}>
      <View style={appStyles.headerContent}>
        <Icon name="qrcode" style={appStyles.headerIcon} size={24} />
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
          <Icon
            name="right-from-bracket"
            style={appStyles.headerIcon}
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={appStyles.headerBottom} />
    </View>
  );
};
