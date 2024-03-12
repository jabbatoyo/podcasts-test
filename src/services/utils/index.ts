import { EpisodeDto, PodcastDto } from "..";

export const getStructuredPodcastsData = (data: any) => {
  const newResults: PodcastDto[] = [];
  data?.forEach((element: any) => {
    newResults.push({
      id: element?.id?.attributes["im:id"],
      author: element["im:name"]["label"],
      description: element?.summary.label,
      title: element?.title.label,
      img: element["im:image"][2]["label"],
    });
  });
  return newResults;
};

export const getStructuredEpisodesData = (data: any) => {
  const newResults: EpisodeDto[] = [];
  data?.forEach((element: any) => {
    newResults.push({
      id: element?.trackId,
      title: element?.trackName,
      audio: element?.episodeUrl,
      description: element?.description,
      date: element?.releaseDate,
      duration: convertMS(element?.trackTimeMillis),
    });
  });
  return newResults;
};

const convertMS = (ms: number) => {
  let h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  const d = Math.floor(h / 24);
  h = h % 24;
  h += d * 24;
  return h + ":" + m + ":" + s;
};

export const isLocalStogageExpired = (timestamp: any) => {
  const oneday = 60 * 60 * 24 * 1000;
  const now = Date.now();
  if (!timestamp) return true;
  return now - timestamp > oneday;
};
