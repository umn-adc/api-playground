import { createHashRouter } from "react-router-dom";
import Home from "./Home";
import Form from "./form";

const router = createHashRouter([
  { path: "/", Component: Home },
  { path: "/form", Component: Form }
]);

export default router;
