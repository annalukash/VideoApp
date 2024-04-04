import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';

import Store from '../../store';
import Header from '../header';

import Style from './style.ts';
import IVideo from '../../interfaces/IVideo.ts';
import Chevron from '../../icons/Chevron.tsx';

const WatchingProgress = () => {
  const video: IVideo | null = Store.currentlyWatchingVideo;

  return video ? (
    <View style={Style.container}>
      <Header>Continue Watching</Header>
      <TouchableOpacity style={Style.content}>
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
