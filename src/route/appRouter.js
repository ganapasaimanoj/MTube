import { createBrowserRouter } from "react-router-dom";
import Watch from "../components/watch-container/Watch";
import Body from "../components/layout/Body";
import Subscriptions from "../components/sidebar/Subscriptions";
import MainContainer from "../components/main-container/MainContainer";
import Results from "../components/main-container/Results";
import UnderProgress from "../components/layout/UnderProgress";
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
      { path: "/results", element: <Results /> },
      { path: "/under-progress", element: <UnderProgress /> },
    ],
  },
]);
export default appRouter;
