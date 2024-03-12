//types
import { EpisodeDto } from "../../../services";
//styles
import { DetailCardEpisodeContainer } from "../Detail.styles";

type DetaulEpisodeProps = {
  episode: EpisodeDto;
};
const DetailEpisode = ({ episode }: DetaulEpisodeProps) => {
  return (
    <DetailCardEpisodeContainer>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <div className="audio-content">
        <audio controls>
          <source src={episode.audio} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </DetailCardEpisodeContainer>
  );
};

export default DetailEpisode;
