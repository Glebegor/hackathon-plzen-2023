import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from '../elements/Icon';

import { useStyles } from '../../hooks/style';

import type { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconName;
  text: string;
  color: string;
}

export const MoodBox: React.FC<Props> = ({ icon, text, color }) => {
  const { appStyles } = useStyles();

  return (
    <View style={styles.wrap}>
      <Icon
        name={icon}
        style={{ ...appStyles.text, ...styles.icon, color }}
        size={24}
      />
      <Text style={appStyles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 48,
    alignItems: 'center',
    width: '50%',
  },
  icon: {
    marginBottom: 12,
  },
});
