//components
import { Card } from "..";

//styles
import { Container } from "./cardContainer.styles";

const CardContainer = ({ podcasts }: any) => {
  return (
    <Container data-testid="card-container">
      {podcasts?.map((podcast: any) => {
        return <Card key={podcast.id} podcast={podcast} />;
      })}
    </Container>
  );
};

export default CardContainer;
