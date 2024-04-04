import React, { useEffect } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import Style from './styles';
import Store from '../../store';
import IVideoGroup from '../../interfaces/IVideoGroup.ts';
import VideoItem from '../../components/video-item';
import VideoCarousel from '../../components/video-carousel';
import Header from '../../components/header';
import WatchingProgress from '../../components/watching-progress';

const HomeScreen = () => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const videoListGroup: IVideoGroup[] = Store.sortedVideoList;

  useEffect(() => {
    Store.getVideoList();
  }, []);

  return (
    <View style={Style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom }}>
        <VideoCarousel />
        <WatchingProgress />
        {videoListGroup.map(videoGroupItem => (
          <View key={videoGroupItem.id} style={{ marginTop: 40 }}>
            <Header style={{ marginLeft: 16 }}>
              {videoGroupItem.categoryName}
            </Header>
            <FlatList
              data={videoGroupItem.videoList}
              renderItem={({ item }) => <VideoItem videoItem={item} />}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12, paddingHorizontal: 16 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default observer(HomeScreen);
