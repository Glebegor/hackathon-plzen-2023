import React from 'react';
import { View, Text } from 'react-native';

import { Icon } from '../elements/Icon';

import type { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconName;
  text: string;
}

export const MoodBox: React.FC<Props> = ({ icon, text }) => {
  return (
    <View>
      <Icon name={icon} />
      <Text>{text}</Text>
    </View>
  );
};
