import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Store from '../../store';
import Header from '../header';

import Style from './style.ts';
import IVideo from '../../interfaces/IVideo.ts';
import Chevron from '../../icons/Chevron.tsx';

import RootStackParamList from '../../interfaces/RootStackParamList.ts';
import ISavedVideo from '../../interfaces/ISavedVideo.ts';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const WatchingProgress = () => {
  const navigation = useNavigation<NavigationProps>();
  const video: ISavedVideo | null = Store.currentlyWatchingVideo;

  const navigateToVideoPlayer = (): void => {
    if (video) {
      navigation.navigate('VideoPlayer', {
        video: video,
        selectedEpisode: video,
      });
    }
  };

  return video ? (
    <View style={Style.container}>
      <Header>Continue Watching</Header>
      <TouchableOpacity
        style={Style.content}
        onPress={navigateToVideoPlayer}
        activeOpacity={0.8}>
        <Image source={{ uri: video.image }} style={Style.image} />
        <View style={{ flex: 1 }}>
          <Text style={Style.title}>{video.name}</Text>
          <Text style={Style.text}>{video.author}</Text>
        </View>
        <Chevron />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default observer(WatchingProgress);
