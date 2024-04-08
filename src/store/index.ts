import { action, makeObservable, observable, computed } from 'mobx';
import remoteConfig from '@react-native-firebase/remote-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IVideoGroup from '../interfaces/IVideoGroup.ts';
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
    this.getSavedVideoProgress();
  }

  private storageKey: string = 'watchingVideo';

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

  @action public mutateWatchingVideo(video: ISavedVideo): void {
    this.currentlyWatchingVideo = video;
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

  async saveCurrentlyWatchingVideo(video: IVideo): Promise<void> {
    try {
      const watchingVideo: ISavedVideo = {
        ...video,
        watchingProgress: this.currentVideoProgress,
        savedEpisode: this.currentEpisode,
      };
      this.mutateWatchingVideo(watchingVideo);
      await AsyncStorage.setItem(
        this.storageKey,
        JSON.stringify(watchingVideo),
      );
    } catch (e) {
      console.log('error while saving video progress to storage', e);
    }
  }

  async getSavedVideoProgress(): Promise<void> {
    try {
      const value: string | null = await AsyncStorage.getItem(this.storageKey);
      if (value) {
        this.mutateWatchingVideo(JSON.parse(value));
      }
    } catch (e) {
      console.log('error while getting video progress from storage', e);
    }
  }
}

export default new Store();
