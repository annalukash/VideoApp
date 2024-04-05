import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors.ts';
import { Fonts } from '../../theme/fonts.ts';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    position: 'absolute',
    bottom: 50,
    left: 16,
    right: 22,
  },
  progressBar: {
    height: 3,
    backgroundColor: Colors.whiteOpacity,
    borderRadius: 216,
    flexDirection: 'row',
  },
  timerContainer: {
    top: 6,
    width: '100%',
    position: 'absolute',
  },
  text: {
    fontFamily: Fonts.semiBold,
    fontWeight: '600',
    fontSize: 11,
    lineHeight: 14,
    color: Colors.whiteOpacity70,
  },
  currentProgress: {
    backgroundColor: Colors.white,
  },
  dot: {
    backgroundColor: Colors.white,
    width: 9,
    height: 9,
    top: -3,
    borderRadius: 5,
  },
});
