import { createHashRouter } from "react-router-dom";
import Home from "./Home";

const router = createHashRouter([
  { path: "/", Component: Home },
  // TODO: add your path and page here
]);

export default router;
