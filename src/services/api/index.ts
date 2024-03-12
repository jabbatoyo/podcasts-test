import { fetchApiGet } from "..";
import { getStructuredEpisodesData, getStructuredPodcastsData } from "../utils";

export const getPodcasts = async () => {
  const url = `us/rss/toppodcasts/limit=100/genre=1310/json`;
  const { contents }: any = await fetchApiGet({ url });
  const {
    feed: { entry },
  } = JSON.parse(contents);
  const res = getStructuredPodcastsData(entry);
  return res;
};

export const getEpidodes = async (podcastId: string) => {
  const url = `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const { contents }: any = await fetchApiGet({ url });
  const { results } = JSON.parse(contents);
  const res = getStructuredEpisodesData(results.splice(1, 21));
  return res;
};
