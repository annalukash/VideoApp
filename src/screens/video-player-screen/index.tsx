import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import RootStackParamList from '../../interfaces/RootStackParamList.ts';
import VideoPlayer from '../../components/video-player';
import { Colors } from '../../theme/colors.ts';
import ISavedVideo from '../../interfaces/ISavedVideo.ts';
import IVideo from '../../interfaces/IVideo.ts';
import Store from '../../store';

type Props = NativeStackScreenProps<RootStackParamList, 'VideoPlayer'>;

export interface IParams {
  video: IVideo;
  selectedEpisode?: ISavedVideo;
}

const { height } = Dimensions.get('window');

const VideoPlayerScreen = (props: Props) => {
  const { route } = props;
  const { selectedEpisode, video } = route.params;
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [savedVideoProgress, setSavedVideoProgress] = useState<number>(
    selectedEpisode?.watchingProgress || 0,
  );
  const scrollRef = useRef<FlatList>(null);

  useEffect(() => {
    if (selectedEpisode) {
      scrollRef?.current?.scrollToOffset({
        offset: height * selectedEpisode.savedEpisode,
        animated: true,
      });
    }

    return () => {
      Store.mutateWatchingVideo(video);
    };
  }, []);

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const index: number = Math.round(
      event.nativeEvent.contentOffset.y / height,
    );
    setCurrentVideoIndex(index);
    Store.mutateCurrentEpisode(index);
    const progress: number =
      index === selectedEpisode?.savedEpisode
        ? selectedEpisode.watchingProgress
        : 0;
    if (savedVideoProgress) {
      setSavedVideoProgress(progress);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <FlatList
        ref={scrollRef}
        contentContainerStyle={{ flexGrow: 1 }}
        data={video.episodes}
        pagingEnabled
        renderItem={({ item, index }) => (
          <VideoPlayer
            video={item}
            index={index}
            currentVideoIndex={currentVideoIndex}
            savedProgress={savedVideoProgress}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollToIndexFailed={({ index }) =>
          console.log(`failed to scroll to ${index}`)
        }
      />
    </View>
  );
};

export default observer(VideoPlayerScreen);
