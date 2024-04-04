import { action, makeObservable, observable, computed } from 'mobx';
import remoteConfig from '@react-native-firebase/remote-config';
import IVideoGroup from '../interfaces/IVideoGroup.ts';
import VideoCategory from '../interfaces/enums/VideoCategory.ts';
import IVideo from '../interfaces/IVideo.ts';

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
          link: '',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-04-01T07:56:16.367Z',
        },
        {
          id: 'heufjekw',
          name: 'Beautiful Revenge',
          author: 'Sienna Blake',
          image:
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfReG-LikKRGnuwGXhdDY7jsU3odBTVU8VTKnC5YNJPlYZU33Z',
          link: '',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-07-02T07:56:16.367Z',
        },
        {
          id: 'vikgerg',
          name: 'Sin De Rella',
          author: 'Gia Hunter',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661026651i/62034033.jpg',
          link: '',
          type: VideoCategory.DRAMA,
          releaseDate: '2024-07-02T07:56:16.367Z',
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
          link: '',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-04-01T07:56:16.367Z',
        },
        {
          id: '47uhfiejknd',
          name: 'Trained for Seduction',
          author: 'Mia Downing',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344526331i/15805333.jpg',
          link: '',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-07-02T07:56:16.367Z',
        },
        {
          id: 'ehvuejrkver',
          name: "Alpha's Detective",
          author: 'Lana Vera',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680045812i/123961715.jpg',
          link: '',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-04-01T07:56:16.367Z',
        },
        {
          id: '7ryehjdks',
          name: 'Crescent',
          author: 'Diana Abu-Jaber',
          image:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388192485i/8219033.jpg',
          link: '',
          type: VideoCategory.ROMANCE,
          releaseDate: '2024-07-02T07:56:16.367Z',
        },
      ],
    },
  ];

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

  getVideoList(): void {
    const result = remoteConfig().getValue('videoList');
    console.log(result, '-----');
    console.log(result.asString(), '++++');
  }
}

export default new Store();
