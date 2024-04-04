import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme/colors.ts';
import { Fonts } from '../../theme/fonts.ts';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 1.1,
    height: height / 4,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 8,
  },
  categoryContainer: {
    backgroundColor: Colors.black,
    padding: 6,
    borderRadius: 4,
  },
  category: {
    fontFamily: Fonts.bold,
    fontSize: 11,
    lineHeight: 21,
    color: Colors.white,
    textAlign: 'center',
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    lineHeight: 28,
    color: Colors.flashWhite,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    lineHeight: 16,
    color: Colors.grey,
    paddingTop: 4,
  },
});
