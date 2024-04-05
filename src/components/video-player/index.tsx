import React, { useRef, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getVideoDuration } from 'react-native-video-duration';

import VideoPlayerControls from '../video-player-controls';
import GradientBar from '../gradient-bar';
import Style from './style.ts';
import Header from '../header';
import CloseIcon from '../../icons/CloseIcon.tsx';

import RootStackParamList from '../../interfaces/RootStackParamList';
import Store from '../../store';

interface IProps {
  video: string;
  index: number;
  currentVideoIndex: number;
  savedProgress?: number;
}

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'VideoPlayer'
>;

const VideoPlayer = ({
  video,
  index,
  currentVideoIndex,
  savedProgress = 0,
}: IProps) => {
  const navigation = useNavigation<NavigationProps>();
  const videoRef = useRef<Video>(null);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);

  useEffect(() => {
    videoRef.current?.seek(savedProgress);
    setIsPaused(currentVideoIndex !== index);
    if (currentVideoIndex === index) {
      loadVideoDuration();
    }
  }, [currentVideoIndex]);

  const loadVideoDuration = async () => {
    const duration: Number = await getVideoDuration(video);
    setVideoDuration(duration as number);
  };

  const onProgress = (value: number): void => {
    setVideoProgress(value);
    Store.mutateCurrentVideoProgress(value);
  };

  return (
    <TouchableOpacity
      style={Style.container}
      activeOpacity={1}
      onPress={() => setIsPaused(!isPaused)}>
      <Video
        ref={videoRef}
        source={{ uri: video, type: 'm3u8' }}
        style={{ flex: 1 }}
        controls={false}
        resizeMode={'stretch'}
        paused={currentVideoIndex !== index || isPaused}
        ignoreSilentSwitch={'ignore'}
        onProgress={data => onProgress(data.currentTime)}
        repeat
      />
      <GradientBar style={Style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon />
        </TouchableOpacity>
        <Header style={Style.text}>Episode {index + 1}</Header>
        <View style={Style.offset} />
      </GradientBar>
      <GradientBar isFooter />
      <VideoPlayerControls
        isPaused={currentVideoIndex !== index || isPaused}
        videoProgress={videoProgress}
        videoDuration={videoDuration}
      />
    </TouchableOpacity>
  );
};

export default VideoPlayer;
