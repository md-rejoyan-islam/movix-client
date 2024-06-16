import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Movix</title>
        <link rel="canonical" href="https://movix-plex.netlify.app/" />
      </Helmet>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
