import { RouteObject } from "react-router-dom";
import { loaderPodcastWithEpisodes, loaderPodcasts } from "./loaders";

//components
import { Layout } from "../components";
// views
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

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
        path: `${BASE_URL}podcast/:podcastId`,
        element: <DetailPage />,
        loader: loaderPodcastWithEpisodes,
      },
      {
        path: `${BASE_URL}podcast/:podcastId/episode/:episodeId`,
        element: <DetailPage />,
        loader: loaderPodcastWithEpisodes,
      },
    ],
  },
];

export default routes;
