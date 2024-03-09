import { LoaderFunction } from "react-router-dom";
import { getPodcasts, getPodcast } from "../services";

export const loaderPodcasts: LoaderFunction = async () => {
  const res = await getPodcasts();
  return res;
};

export const loaderPodcast: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const res = await getPodcast(String(id));

  return res;
};
