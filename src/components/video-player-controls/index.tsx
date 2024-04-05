import React, { useMemo } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import PlayIcon from '../../icons/PlayIcon.tsx';
import PauseIcon from '../../icons/PauseIcon.tsx';
import { formatSecondsToReadableTime } from '../../utils/timeFormat.ts';
import Style from './style.ts';

interface IProps {
  isPaused: boolean;
  videoProgress: number;
  videoDuration: number;
}

const { width } = Dimensions.get('window');

const VideoPlayerControls = ({
  isPaused,
  videoProgress,
  videoDuration,
}: IProps) => {
  const insets: EdgeInsets = useSafeAreaInsets();
  const fullProgressWidth: number = useMemo(() => width - 84, []);
  const currentProgressWidth: number = useMemo(() => {
    return videoDuration
      ? (fullProgressWidth * videoProgress) / videoDuration
      : 0;
  }, [videoProgress]);

  return (
    <View style={[Style.row, Style.container, { bottom: insets.bottom }]}>
      {isPaused ? <PlayIcon /> : <PauseIcon />}
      <View>
        <View style={{ ...Style.progressBar, width: fullProgressWidth }}>
          <View
            style={{
              ...Style.progressBar,
              ...Style.currentProgress,
              width: currentProgressWidth,
            }}
          />
          <View style={Style.dot} />
        </View>
        <View style={[Style.row, Style.timerContainer]}>
          <Text style={Style.text}>
            {formatSecondsToReadableTime(videoProgress)}
          </Text>
          <Text style={Style.text}>
            {formatSecondsToReadableTime(videoDuration)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayerControls;
