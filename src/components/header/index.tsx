import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { Fonts } from '../../theme/fonts.ts';
import { Colors } from '../../theme/colors.ts';

interface IProps {
  style?: TextStyle;
}

const Header = (props: PropsWithChildren<IProps>) => {
  return <Text style={[style.text, props.style]}>{props.children}</Text>;
};

const style = StyleSheet.create({
  text: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
});

export default Header;
