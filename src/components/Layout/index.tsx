import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "..";
import { Container } from "./Layout.styles";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <Container>
      <Header state={state} />
      {state !== "loading" && (
        <div className="body-container">
          <Outlet />
        </div>
      )}
    </Container>
  );
};

export default Layout;
