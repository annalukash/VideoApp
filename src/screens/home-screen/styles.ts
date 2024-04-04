import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors.ts';
import { Fonts } from '../../theme/fonts.ts';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.black,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
});
