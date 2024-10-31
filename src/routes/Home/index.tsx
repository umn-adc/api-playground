import router from "../router";
import { Container, Content, Title } from "./styles";

const Home = () => {
  return (
    <Container>
      <Title>api_playground</Title>
      <Content>
        {router.routes.length > 1 ? (
          router.routes
            .filter((route) => route.path !== "/")
            .map((route) => <a href={"/#" + route.path}>{route.path}</a>)
        ) : (
          <p>No submissions yet 👀</p>
        )}
      </Content>
    </Container>
  );
};

export default Home;
