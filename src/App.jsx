import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  const routerElement = useRoutes(routes);
  return routerElement;
  
}
