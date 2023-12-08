import React from 'react';
import { SafeAreaView } from 'react-native';

import { FeelingBox } from '../components/blocks/FeelingBox';

import { useStyles } from '../hooks/style';

import type { Feeling } from '../typings/feeling';

const EXAMPLE_FEELINGS: Feeling[] = [
  { id: 1, name: 'Feeling 1', icon: 'layer-group' },
  { id: 2, name: 'Feeling 2', icon: 'layer-group' },
  { id: 3, name: 'Feeling 3', icon: 'layer-group' },
  { id: 4, name: 'Feeling 4', icon: 'layer-group' },
  { id: 5, name: 'Feeling 5', icon: 'layer-group' },
  { id: 6, name: 'Feeling 6', icon: 'layer-group' },
  { id: 7, name: 'Feeling 7', icon: 'layer-group' },
];

export const HomeScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      {EXAMPLE_FEELINGS.map((feeling) => (
        <FeelingBox key={feeling.id} feeling={feeling} />
      ))}
    </SafeAreaView>
  );
};
