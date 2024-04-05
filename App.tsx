import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './src/interfaces/RootStackParamList.ts';

import HomeScreen from './src/screens/home-screen';
import { Colors } from './src/theme/colors';
import SearchIcon from './src/icons/SearchIcon.tsx';
import Header from './src/components/header';
import VideoPlayerScreen from './src/screens/video-player-screen';

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
            headerLeft: () => <Header style={{ marginBottom: 0 }}>Home</Header>,
            headerRight: () => (
              <TouchableOpacity>
                <SearchIcon />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
