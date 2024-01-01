import { createBrowserRouter } from "react-router-dom";
import Watch from "../components/watch-container/Watch";
import Body from "../components/layout/Body";
import Subscriptions from "../components/sidebar/Subscriptions";
import MainContainer from "../components/main-container/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/subscriptions",
        element: <Subscriptions />,
      },
    ],
  },
]);
export default appRouter;
