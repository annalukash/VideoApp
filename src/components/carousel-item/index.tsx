import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import IVideo from '../../interfaces/IVideo.ts';

import Style from './style.ts';

interface IProps {
  videoItem: IVideo;
}

const CarouselItem = ({ videoItem }: IProps) => {
  const { name, author, image, type } = videoItem;
  return (
    <ImageBackground source={{ uri: image }} style={Style.container}>
      <View style={Style.categoryContainer}>
        <Text style={Style.category}>{type}</Text>
      </View>
      <View style={Style.backdrop}>
        <Text style={Style.title}>{name}</Text>
        <Text style={Style.text}>{author}</Text>
      </View>
    </ImageBackground>
  );
};

export default CarouselItem;
