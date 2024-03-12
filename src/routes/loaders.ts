import { LoaderFunction } from "react-router-dom";
import { getPodcasts, getEpidodes, PodcastDto } from "../services";
import { APP_LOCALSTORAGE_KEY } from "../config/constants";
import { isLocalStogageExpired } from "../services/utils";

export const loaderPodcasts: LoaderFunction = async () => {
  const podcastsLocalStorage = JSON.parse(
    localStorage.getItem(APP_LOCALSTORAGE_KEY) as any
  );

  if (
    podcastsLocalStorage ||
    !isLocalStogageExpired(podcastsLocalStorage?.timestamp)
  ) {
    const { value } = podcastsLocalStorage;
    return value;
  }
  const res = await getPodcasts();
  const localObject = { value: res, timestamp: new Date().getTime() };
  localStorage.setItem(APP_LOCALSTORAGE_KEY, JSON.stringify(localObject));
  return res;
};

export const loaderPodcastWithEpisodes: LoaderFunction = async ({ params }) => {
  const podcastsLocalStorage = JSON.parse(
    localStorage.getItem(APP_LOCALSTORAGE_KEY) as any
  );

  if (
    podcastsLocalStorage ||
    !isLocalStogageExpired(podcastsLocalStorage?.timestamp)
  ) {
    const { podcastId } = params;
    const { value } = podcastsLocalStorage;
    const podcast = value.find(
      (item: PodcastDto) => Number(item.id) === Number(podcastId)
    );
    const res = await getEpidodes(String(podcastId));
    return {
      ...podcast,
      episodes: res,
    };
  }
  return [];
};
