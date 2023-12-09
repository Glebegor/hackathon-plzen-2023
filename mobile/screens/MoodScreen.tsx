import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

import { Header } from '../components/blocks/Header';
import { MoodBox } from '../components/blocks/MoodBox';
import { BackButton } from '../components/blocks/BackButton';

import type { Mood } from '../typings/mood';

import { useStyles } from '../hooks/style';

export const EXAMPLE_MOODS: Mood[] = [
  {
    id: 2,
    hex: '#17A300',
    name: 'Jako nový',
    charset: 'face-grin-squint-tears',
  },
  {
    id: 3,
    hex: '#4CBF16',
    name: 'Nadšený',
    charset: 'face-grin-beam',
  },
  {
    id: 5,
    hex: '#FF9805',
    name: 'Znuděný',
    charset: 'face-meh',
  },
  {
    id: 6,
    hex: '#FF5005',
    name: 'Zklamaný',
    charset: 'face-frown',
  },
  {
    id: 7,
    hex: '#05C3FF',
    name: 'Smutný',
    charset: 'face-sad-tear',
  },
  {
    id: 4,
    hex: '#B3CC4D',
    name: 'Šťastný',
    charset: 'face-grin-wink',
  },
  {
    id: 8,
    hex: '#0578FF',
    name: 'Vyděšený',
    charset: 'face-sad-cry',
  },
  {
    id: 11,
    hex: '#6405FF',
    name: 'Překvapený',
    charset: 'face-surprise',
  },
  {
    id: 12,
    hex: '#FF0505',
    name: 'Naštvaný',
    charset: 'face-angry',
  },
];

export const MoodScreen: React.FC = () => {
  const { appStyles } = useStyles();

  return (
    <SafeAreaView style={appStyles.wrapper}>
      <Header />
      <Text style={{ ...appStyles.title }}>Jak se dnes cítíš?</Text>
      <ScrollView contentContainerStyle={styles.wrap}>
        {EXAMPLE_MOODS.map((mood) => (
          <MoodBox
            key={mood.id}
            icon={mood.charset}
            text={mood.name}
            color={mood.hex}
          />
        ))}
      </ScrollView>
      <BackButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingHorizontal: 24,
  },
});
