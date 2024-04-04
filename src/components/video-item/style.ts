import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../theme/fonts.ts';
import { Colors } from '../../theme/colors.ts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 3,
    overflow: 'hidden',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.semiBold,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.brightGray,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  unavailableIcon: {
    backgroundColor: Colors.whiteOpacity,
    width: 48,
    height: 48,
    borderRadius: 24,
    position: 'absolute',
  },
  accent: {
    fontFamily: Fonts.extraBold,
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 14,
    color: Colors.blue,
    textTransform: 'uppercase',
  },
});
