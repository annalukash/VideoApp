import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './src/interfaces/RootStackParamList.ts';

import HomeScreen from './src/screens/home-screen';
import { Colors } from './src/theme/colors';
import SearchIcon from './src/icons/SearchIcon.tsx';
import { Fonts } from './src/theme/fonts.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: { backgroundColor: Colors.black },
            headerLeft: () => <Text style={Style.title}>Home</Text>,
            headerRight: () => (
              <TouchableOpacity>
                <SearchIcon />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Style = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.white,
    letterSpacing: -0.5,
  },
});

export default App;
