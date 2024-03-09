import { RouteObject } from "react-router-dom";
import { loaderPodcast, loaderPodcasts } from "./loaders";

//components
import { Layout } from "../components";
// views
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import EpisodePage from "../pages/EpisodePage";

export const BASE_URL = "/";

const routes: RouteObject[] = [
  {
    path: BASE_URL,
    element: <Layout />,
    children: [
      {
        path: BASE_URL,
        element: <HomePage />,
        loader: loaderPodcasts,
      },
      {
        path: `${BASE_URL}podcast/{podcastId}`,
        element: <DetailPage />,
        loader: () => loaderPodcast,
      },
      {
        path: `${BASE_URL}podcast/{podcastId}/episode/{episodeId}`,
        element: <EpisodePage />,
      },
    ],
  },
];

export default routes;
