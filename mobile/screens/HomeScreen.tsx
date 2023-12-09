import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Header } from '../components/blocks/Header';
import { MenuItem } from '../components/blocks/MenuItem';

import { useStyles } from '../hooks/style';

import type { Feeling } from '../typings/feeling';

export const EXAMPLE_FEELINGS: Feeling[] = [
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
      <Header />
      <ScrollView>
        <MenuItem
          icon="house"
          title="Náladoměr"
          description="Popisek funckionality."
          backgroundColor="#EFF4DA"
          color="#B3CC4D"
        />
        <MenuItem
          icon="house"
          title="Řekli byste nám"
          description="Popisek funckionality."
          backgroundColor="#FFF3CA"
          color="#FFC805"
        />
        <MenuItem
          icon="house"
          title="Pošeptejte nám"
          description="Popisek funckionality."
          backgroundColor="#FFE9CA"
          color="#FE9805"
        />
        <MenuItem
          icon="house"
          title="Zavolte sestřičku"
          description="Popisek funckionality."
          backgroundColor="#FFDACA"
          color="#FF5005"
        />
        <MenuItem
          icon="house"
          title="Hry"
          description="Popisek funckionality."
          backgroundColor="#DECAFF"
          color="#6405FF"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
