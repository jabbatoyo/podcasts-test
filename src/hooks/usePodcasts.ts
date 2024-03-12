import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

//types
import { PodcastDto } from "../services";

function usePodcasts() {
  const podcastsLoader = useLoaderData() as PodcastDto[];
  const [podcasts, setPodcasts] = useState<PodcastDto[]>(podcastsLoader);

  const filterPodcasts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const res = podcastsLoader.filter((item) => item.title.includes(value));
    setPodcasts(res);
  };

  return { podcasts, totalResults: podcasts.length, filterPodcasts };
}

export default usePodcasts;
