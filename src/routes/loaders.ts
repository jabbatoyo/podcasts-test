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

export const loaderPodcast: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const res = await getPodcast(String(id));

  return res;
};
