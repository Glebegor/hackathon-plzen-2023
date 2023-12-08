import { StyleSheet } from 'react-native';

/**
 * Custom hook for managing styles in a React Native application.
 *
 * @property {Object.<string, ViewStyle>} appStyles - Application view styles.
 * @property {ViewStyle} appStyles.wrapper - Style for the wrapper component.
 * @property {TextStyle} appStyles.text - Style for text components.
 */
export const useStyles = () => {
  const appStyles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      color: '#000',
    },
  });

  return {
    appStyles,
  };
};
