import IVideo from './IVideo.ts';

interface IVideoGroup {
  id: string;
  categoryName: string;
  videoList: IVideo[];
}

export default IVideoGroup;
