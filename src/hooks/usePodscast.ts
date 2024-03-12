import { useLoaderData, useLocation, useParams } from "react-router-dom";

//types
import { PodcastDto } from "../services";

function usePodcast() {
  const podcast = useLoaderData() as PodcastDto;
  const { pathname } = useLocation();
  const { podcastId } = useParams();
  const { episodeId } = useParams();
  const isDetailPodcast = pathname === `/podcast/${podcastId}`;

  const getEpisode = () => {
    if (episodeId) {
      const res = podcast.episodes?.find(
        (item) => Number(item.id) === Number(episodeId)
      );
      return res;
    }
    return undefined;
  };

  return {
    podcast,
    podcastId,
    isDetailPodcast,
    totalEpisodes: podcast.episodes?.length,
    episode: getEpisode(),
  };
}

export default usePodcast;
