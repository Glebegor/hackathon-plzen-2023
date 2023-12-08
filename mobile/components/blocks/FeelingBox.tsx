import React from 'react';
import { View, Text } from 'react-native';

import { Icon } from '../elements/Icon';

import { useStyles } from '../../hooks/style';

import type { Feeling } from '../../typings/feeling';

interface Props {
  feeling: Feeling;
}

export const FeelingBox: React.FC<Props> = ({ feeling }) => {
  const { appStyles } = useStyles();

  return (
    <View>
      <Icon name={feeling.icon} style={appStyles.text} />
      <Text style={appStyles.text}>{feeling.name}</Text>
    </View>
  );
};
