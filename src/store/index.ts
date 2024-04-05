import { action, makeObservable, observable, computed } from 'mobx';
import remoteConfig from '@react-native-firebase/remote-config';
import IVideoGroup from '../interfaces/IVideoGroup.ts';
import VideoCategory from '../interfaces/enums/VideoCategory.ts';
import IVideo from '../interfaces/IVideo.ts';
import ISavedVideo from '../interfaces/ISavedVideo.ts';

class Store {
  constructor() {
    makeObservable(this);

    // remoteConfig().fetchAndActivate();
    remoteConfig()
      .setConfigSettings({
        minimumFetchIntervalMillis: 3600,
      })
      .then(() => {
        remoteConfig()
          .fetchAndActivate()
          .then(() => {
            this.getVideoList();
          });
      });
  }

  @observable accessor currentVideoProgress: number = 0;
  @observable accessor currentEpisode: number = 0;
  @observable accessor videoList: IVideoGroup[] = [];
  @observable accessor currentlyWatchingVideo: ISavedVideo | null = null;

  @computed get sortedVideoList(): IVideoGroup[] {
    return this.videoList.map(item => {
      item.videoList = item.videoList
        .slice()
        .sort(
          (a, b) =>
            new Date(a.releaseDate).valueOf() -
            new Date(b.releaseDate).valueOf(),
        );
      return item;
    });
  }

  @computed get availableToWatchVideo(): IVideo[] {
    return this.videoList.flatMap(item => {
      return item.videoList.filter(
        video => new Date().valueOf() > new Date(video.releaseDate).valueOf(),
      );
    });
  }

  @action private mutateVideoList(list: IVideoGroup[]): void {
    this.videoList = list;
  }

  @action public mutateWatchingVideo(video: IVideo): void {
    this.currentlyWatchingVideo = {
      ...video,
      watchingProgress: this.currentVideoProgress,
      savedEpisode: this.currentEpisode,
    };
  }

  @action public mutateCurrentVideoProgress(value: number): void {
    this.currentVideoProgress = value;
  }

  @action public mutateCurrentEpisode(value: number): void {
    this.currentEpisode = value;
  }

  getVideoList(): void {
    const result = remoteConfig().getValue('videoList');
    const videoList = JSON.parse(result.asString());
    this.mutateVideoList(videoList);
  }
}

export default new Store();
