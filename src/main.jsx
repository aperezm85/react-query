import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorPage from "./components/error-page";
import Layout from "./components/layout";

import App from "./App";

import Characters from "./components/characters";
import Character from "./components/character";

import CharactersQuery from "./components/charactersQuery";
import CharacterQuery from "./components/characterQuery";
import Episodes from "./components/episodes";

import "./index.css";
import Episode from "./components/episode";
import EpisodesQuery from "./components/episodesQuery";
import EpisodeQuery from "./components/episodeQuery";

const routerQuery = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/episodes",
        element: <EpisodesQuery />,
      },
      {
        path: "/episodes/:episodeId",
        element: <EpisodeQuery />,
      },
      {
        path: "/characters",
        element: <CharactersQuery />,
      },
      {
        path: "/characters/:characterId",
        element: <CharacterQuery />,
      },
    ],
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/episodes",
        element: <Episodes />,
      },
      {
        path: "/episodes/:episodeId",
        element: <Episode />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/characters/:characterId",
        element: <Character />,
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerQuery} />
    </QueryClientProvider>
  </React.StrictMode>
);
