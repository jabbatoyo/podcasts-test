import { CardContainer } from "../../components";

//components
import usePodcasts from "../../hooks/usePodcasts";

//styles
import { Container } from "./Home.styles";

const HomePage = () => {
  const { podcasts, totalResults, filterPodcasts } = usePodcasts();

  return (
    <Container>
      <div className="search-container">
        <div className="search-content">
          <span>{totalResults}</span>
          <input placeholder="Filter podcasts..." onChange={filterPodcasts} />
        </div>
      </div>
      <CardContainer podcasts={podcasts} />
    </Container>
  );
};

export default HomePage;
