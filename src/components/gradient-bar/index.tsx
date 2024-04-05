import React, { PropsWithChildren, useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '../../theme/colors.ts';

interface IProps {
  isFooter?: boolean;
  style?: ViewStyle;
}

const GradientBar = ({
  isFooter,
  children,
  style,
}: PropsWithChildren<IProps>) => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const heightOffset: number = isFooter ? insets.bottom : insets.top;
  const colorList: string[] = useMemo(() => {
    const colors: string[] = [
      Colors.backdrop100,
      Colors.backdrop99,
      Colors.backdrop95,
      Colors.backdrop90,
      Colors.backdrop80,
      Colors.backdrop70,
      Colors.backdrop60,
      Colors.backdrop50,
      Colors.backdrop40,
      Colors.backdrop30,
      Colors.backdrop20,
      Colors.backdrop15,
      Colors.backdrop8,
      Colors.backdrop3,
      Colors.backdrop1,
      Colors.transparent,
    ];
    return isFooter ? colors.reverse() : colors;
  }, [isFooter]);

  return (
    <LinearGradient
      style={[
        Style.container,
        style,
        { height: 81 + heightOffset },
        isFooter ? { bottom: 0 } : { top: 0 },
      ]}
      colors={colorList}>
      {children}
    </LinearGradient>
  );
};

const Style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
});

export default GradientBar;
