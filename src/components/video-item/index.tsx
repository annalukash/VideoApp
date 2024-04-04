import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import IVideo from '../../interfaces/IVideo.ts';
import Style from './style.ts';
import LockIcon from '../../icons/LockIcon.tsx';
import { getShortDate } from '../../utils/dateFormat.ts';

interface IProps {
  videoItem: IVideo;
}

const VideoItem = ({ videoItem }: IProps) => {
  const today: number = new Date().valueOf();
  const isAvailableToWatch: boolean =
    today > new Date(videoItem.releaseDate).valueOf();
  const releaseDate: string = getShortDate(videoItem.releaseDate);

  return (
    <TouchableOpacity
      style={Style.container}
      disabled={!isAvailableToWatch}
      activeOpacity={0.8}>
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
