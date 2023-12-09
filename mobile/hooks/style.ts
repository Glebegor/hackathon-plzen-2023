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
      fontFamily: 'Montserrat-SemiBold',
    },
    introWrapper: {
      flex: 1,
      padding: 24,
      backgroundColor: '#00a375',
    },
    introIcon: {
      marginBottom: 24,
      color: '#ffffff',
    },
    introText: {
      color: '#ffffff',
    },
    introTitle: {
      paddingHorizontal: 48,
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold',
      fontSize: 28,
    },
    introButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 12,
      width: '100%',
      borderRadius: 4,
      backgroundColor: '#fff',
    },
  });

  return {
    appStyles,
  };
};
