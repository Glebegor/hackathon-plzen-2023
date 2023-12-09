import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon } from '../elements/Icon';

import { useStyles } from '../../hooks/style';

import type { IconName } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconName;
  title: string;
  description: string;
  backgroundColor: string;
  color: string;
}

export const MenuItem: React.FC<Props> = ({
  icon,
  title,
  description,
  backgroundColor,
  color,
}) => {
  const { appStyles } = useStyles();

  return (
    <View style={styles.wrap}>
      <View style={{ ...styles.iconBox, backgroundColor }}>
        <Icon name={icon} style={{ color }} />
      </View>
      <View>
        <Text style={appStyles.text}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    gap: 16,
    borderRadius: 4,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  description: {
    color: '#000',
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
  },
});
