import { createBrowserRouter } from "react-router-dom";
import App from "../components/layout/App";
import Body from "../components/layout/Body";
import Subscriptions from "../components/sidebar/Subscriptions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
]);
export default router;
