import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import NowPlayingMovies from "../pages/movie/NowPlayingMovies";
import PopularMovies from "../pages/movie/PopularMovies";
import TopMovies from "../pages/movie/TopMovies";
import SearchResult from "../pages/search/SearchResult";
import AiringTvShow from "../pages/tv-show/AiringTvShow";
import PopularTvShows from "../pages/tv-show/PopularTvShows";
import TopTvShows from "../pages/tv-show/TopTvShows";

const publicRouter = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/popular",
        element: <PopularMovies />,
      },
      {
        path: "/movie/top-rated",
        element: <TopMovies />,
      },
      {
        path: "/movie/now-playing",
        element: <NowPlayingMovies />,
      },
      {
        path: "/login",
        element: "login",
      },
      {
        path: "/register",
        element: "register",
      },
      {
        path: "/tv/popular",
        element: <PopularTvShows />,
      },
      {
        path: "/tv/top-rated",
        element: <TopTvShows />,
      },
      {
        path: "/tv/on-the-air",
        element: <AiringTvShow />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
    ],
  },
];

export default publicRouter;
