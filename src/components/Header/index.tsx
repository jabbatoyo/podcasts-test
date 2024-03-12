import { Link } from "react-router-dom";
import { Loading } from "..";
import { Container } from "./Header.styles";

const Header = ({ state }: { state: string }) => {
  return (
    <Container>
      <div className="header-content">
        <Link className="title-logo" to="/">
          Podcaster
        </Link>
        {state === "loading" && (
          <div className="loading-content">
            <Loading />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Header;
