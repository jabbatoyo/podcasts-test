//styles
import { Container } from "./card.styles";

const Card = ({ podcast: { id, img, title, author } }: { podcast: any }) => {
  return (
    <Container to={`/podcast/${id}`} data-testid="card-character-content">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="footer">
        <h2>{title}</h2>
        <p>Author: {author}</p>
      </div>
    </Container>
  );
};

export default Card;
