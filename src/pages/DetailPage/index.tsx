//customHooks
import usePodcast from "../../hooks/usePodscast";
//components
import DetailTableEpisodes from "./components/DetailTableEpisodes";
import DetailCardPodcast from "./components/DetailCardPodcast";
import DetailEpisode from "./components/DetailEpisode";
//styles
import { Container } from "./Detail.styles";
import { EpisodeDto } from "../../services";

const DetailPage = () => {
  const { podcast, episode, totalEpisodes, podcastId, isDetailPodcast } =
    usePodcast();
  return (
    <Container>
      <DetailCardPodcast {...podcast} />
      {isDetailPodcast && (
        <DetailTableEpisodes
          episodes={podcast.episodes ? podcast.episodes : []}
          totalEpisodes={totalEpisodes ? totalEpisodes : 0}
          podcastId={Number(podcastId)}
        />
      )}
      {!isDetailPodcast && <DetailEpisode episode={episode as EpisodeDto} />}
    </Container>
  );
};

export default DetailPage;
