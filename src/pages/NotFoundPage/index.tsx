//images
import { useNavigate } from "react-router-dom";

//styles
import { Container } from "./NotFoundPage.styles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>404 Not Found</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return to home
      </button>
    </Container>
  );
};

export default NotFoundPage;
