//styles

import { Link } from "react-router-dom";
import { DetailCardPodcastContainer } from "../Detail.styles";

type DetailCardPodcastProps = {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
};
const DetailCardPodcast = ({
  id,
  img,
  title,
  author,
  description,
}: DetailCardPodcastProps) => {
  return (
    <DetailCardPodcastContainer>
      <Link to={`/podcast/${id}`} className="img-content">
        <img src={img} alt={title} />
      </Link>
      <div className="title-content">
        <h3>{title}</h3>
        <p>by {author}</p>
      </div>
      <div className="description-content">
        <p>{description}</p>
      </div>
    </DetailCardPodcastContainer>
  );
};

export default DetailCardPodcast;
