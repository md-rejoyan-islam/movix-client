import Banner from "./Banner";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";
import { FaPlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
