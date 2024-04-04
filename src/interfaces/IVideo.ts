import VideoCategory from './enums/VideoCategory.ts';

interface IVideo {
  id: string;
  name: string;
  author: string;
  releaseDate: string;
  link: string;
  type: VideoCategory;
  image: string;
}

export default IVideo;
