import { Link } from "react-router-dom";
import { EpisodeDto } from "../../../services";
import { DetailTableEpisodesContainer } from "../Detail.styles";

type DetailTableEpisodesProps = {
  episodes: EpisodeDto[];
  totalEpisodes: number;
  podcastId: number;
};
const DetailTableEpisodes = ({
  episodes,
  totalEpisodes,
  podcastId,
}: DetailTableEpisodesProps) => {
  return (
    <DetailTableEpisodesContainer>
      <div className="episode-number-content">
        <h2>Episodes: {totalEpisodes}</h2>
      </div>
      <div className="episode-table-content">
        <table>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
          {episodes.map((item) => {
            const date = new Date(item.date);
            return (
              <tr>
                <td>
                  <Link to={`/podcast/${podcastId}/episode/${item.id}`}>
                    {item.title}
                  </Link>
                </td>
                <td>{date.toLocaleDateString("en-GB")}</td>
                <td>{item.duration}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </DetailTableEpisodesContainer>
  );
};

export default DetailTableEpisodes;
