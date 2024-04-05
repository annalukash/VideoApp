import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import IVideo from '../../interfaces/IVideo.ts';
import Style from './style.ts';
import LockIcon from '../../icons/LockIcon.tsx';
import { getShortDate } from '../../utils/dateFormat.ts';
import RootStackParamList from '../../interfaces/RootStackParamList.ts';

interface IProps {
  videoItem: IVideo;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const VideoItem = ({ videoItem }: IProps) => {
  const navigation = useNavigation<NavigationProps>();
  const today: number = new Date().valueOf();
  const isAvailableToWatch: boolean =
    today > new Date(videoItem.releaseDate).valueOf();
  const releaseDate: string = getShortDate(videoItem.releaseDate);

  const navigateToVideoPlayer = (): void => {
    navigation.navigate('VideoPlayer', { video: videoItem });
  };

  return (
    <TouchableOpacity
      style={Style.container}
      disabled={!isAvailableToWatch}
      activeOpacity={0.8}
      onPress={navigateToVideoPlayer}>
      <View style={Style.center}>
        <Image
          source={{ uri: videoItem.image }}
          style={Style.image}
          blurRadius={isAvailableToWatch ? 0 : 32}
        />
        {!isAvailableToWatch && (
          <View style={[Style.unavailableIcon, Style.center]}>
            <LockIcon />
          </View>
        )}
      </View>
      {!isAvailableToWatch && (
        <Text style={Style.accent}>Coming {releaseDate}</Text>
      )}
      <Text style={Style.text}>{videoItem.name}</Text>
    </TouchableOpacity>
  );
};

export default VideoItem;
