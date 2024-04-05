import IVideo from './IVideo.ts';

interface ISavedVideo extends IVideo {
  savedEpisode: number;
  watchingProgress: number;
}

export default ISavedVideo;
