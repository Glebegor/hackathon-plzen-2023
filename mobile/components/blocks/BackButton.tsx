import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../elements/Icon';

import { useStyles } from '../../hooks/style';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../App';

export const BackButton: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { appStyles } = useStyles();

  return (
    <TouchableHighlight
      style={appStyles.backButton}
      onPress={() => navigation.navigate('Home')}
    >
      <Icon name="arrow-left" style={appStyles.backIcon} />
    </TouchableHighlight>
  );
};
