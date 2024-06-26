import VideoCategory from '../enums/VideoCategory.ts';

interface IVideo {
  id: string;
  name: string;
  author: string;
  releaseDate: string;
  type: VideoCategory;
  image: string;
  episodes: string[];
}

export default IVideo;
