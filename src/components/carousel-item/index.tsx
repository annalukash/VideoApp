import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IVideo from '../../interfaces/IVideo.ts';

import Style from './style.ts';
import { Colors } from '../../theme/colors.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RootStackParamList from '../../interfaces/RootStackParamList.ts';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  videoItem: IVideo;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const CarouselItem = ({ videoItem }: IProps) => {
  const navigation = useNavigation<NavigationProps>();
  const { name, author, image, type } = videoItem;

  const navigateToVideoPlayer = (): void => {
    navigation.navigate('VideoPlayer', { video: videoItem });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={navigateToVideoPlayer}>
      <ImageBackground source={{ uri: image }} style={Style.container}>
        <View style={Style.categoryContainer}>
          <Text style={Style.category}>{type}</Text>
        </View>
        <LinearGradient
          style={Style.backdrop}
          colors={[
            Colors.backdrop20,
            Colors.backdrop40,
            Colors.backdrop60,
            Colors.backdrop80,
          ]}>
          <Text style={Style.title}>{name}</Text>
          <Text style={Style.text}>{author}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CarouselItem;
