export type FetchDto = {
  url: string;
  dataToSend?: any;
};

export type PodcastDto = {
  id: number;
  author: string;
  title: string;
  description: string;
  img: string;
  episodes?: EpisodeDto[];
};

export type EpisodeDto = {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  audio: string;
};
