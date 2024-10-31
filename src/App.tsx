import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import dflt from "./styles/themes/default";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <ThemeProvider theme={dflt}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
