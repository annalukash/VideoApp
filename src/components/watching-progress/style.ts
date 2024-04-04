import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors.ts';
import { Fonts } from '../../theme/fonts.ts';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 44,
  },
  content: {
    backgroundColor: Colors.darkBlue,
    padding: 6,
    paddingRight: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 44,
    height: 56,
    borderRadius: 8,
  },
  title: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.brightGray,
  },
  text: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: Colors.platinum,
  },
});
