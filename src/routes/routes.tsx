import { RouteObject } from "react-router-dom";

export const BASE_URL = "/";

const routes: RouteObject[] = [
  {
    path: BASE_URL,
    element: <h1>Layout</h1>,
    children: [
      {
        path: BASE_URL,
        element: <h1>HOME</h1>,
        loader: () => console.log("home"),
      },
      {
        path: `${BASE_URL}podcast/{podcastId}`,
        element: <h1>DETAIL</h1>,
        loader: () => console.log("home"),
      },
      {
        path: `${BASE_URL}podcast/{podcastId}/episode/{episodeId}`,
        element: <h1>Episidio</h1>,
        loader: () => console.log("home"),
      },
    ],
  },
];

export default routes;
