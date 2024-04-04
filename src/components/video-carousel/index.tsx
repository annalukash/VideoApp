import React from 'react';
import { View, FlatList } from 'react-native';
import { observer } from 'mobx-react';

import Store from '../../store';
import IVideo from '../../interfaces/IVideo.ts';
import CarouselItem from '../carousel-item';

const VideoCarousel = () => {
  const videoList: IVideo[] = Store.availableToWatchVideo;

  return (
    <View>
      <FlatList
        data={videoList}
        renderItem={({ item }) => <CarouselItem videoItem={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default observer(VideoCarousel);
