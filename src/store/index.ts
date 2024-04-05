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
        minimumFetchIntervalMillis: 30000,
      })
      .then(() => {
        remoteConfig().fetchAndActivate();
      });
    this.getVideoList();
  }

  episodes: string[] = [
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
    'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
  ];

  @observable accessor currentVideoProgress: number = 0;
  @observable accessor currentEpisode: number = 0;
  @observable accessor videoList: IVideoGroup[] = [
    {
      id: 'edfrege',
      categoryName: 'Trending Now',
      videoList: [
        {
          id: 'fvinerk',
          name: 'Wolfstate chronicles: Alaska, Texas',
          author: 'Bella Johnson',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1423947675i/24935568.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-04-01T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: 'heufjekw',
          name: 'Beautiful Revenge',
          author: 'Sienna Blake',
          image:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfReG-LikKRGnuwGXhdDY7jsU3odBTVU8VTKnC5YNJPlYZU33Z',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-07-02T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: 'vikgerg',
          name: 'Sin De Rella',
          author: 'Gia Hunter',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661026651i/62034033.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-07-02T07:56:16.367Z',
          episodes: this.episodes,
        },
      ],
    },
    {
      id: 'urghjnfkd',
      categoryName: 'Top Romance',
      videoList: [
        {
          id: 'efhbwjnk34',
          name: 'Lethal Limits',
          author: 'Mia Downing',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348777440i/16050474.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-04-01T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: '47uhfiejknd',
          name: 'Trained for Seduction',
          author: 'Mia Downing',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344526331i/15805333.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-07-02T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: 'ehvuejrkver',
          name: "Alpha's Detective",
          author: 'Lana Vera',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680045812i/123961715.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-04-01T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: '7ryehjdks',
          name: 'Crescent',
          author: 'Diana Abu-Jaber',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192485i/8219033.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-07-02T07:56:16.367Z',
          episodes: this.episodes,
        },
        {
          id: 'fierjknve',
          name: 'Sharp objects',
          author: 'Gillian Flynn',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192485i/8219033.jpg',
          link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-03-012T07:56:16.367Z',
          episodes: this.episodes,
        },
      ],
    },
  ];
  @observable accessor currentlyWatchingVideo: ISavedVideo | null = {
    id: 'fierjknve',
    name: 'Sharp objects',
    author: 'Gillian Flynn',
    image:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192485i/8219033.jpg',
    link: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
    type: VideoCategory.ROMANCE,
    releaseDate: '2024-03-012T07:56:16.367Z',
    episodes: this.episodes,
    savedEpisode: 3,
    watchingProgress: 15,
  };

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
    console.log(result, '-----');
    console.log(result.asString(), '++++');
  }
}

export default new Store();
