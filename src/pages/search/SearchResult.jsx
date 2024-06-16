import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import SortMovieCard from "../../components/MovieCard/SortMovieCard";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
      <Helmet>
        <title>Search Result | Movix</title>
      </Helmet>
      <div className="max-w-container py-8 md:py-12 px-4">
        <h2 className="text-[20px] sm:text-[24px] text-white text-nowrap px-2">
          Search results of &apos;{query}&apos;
        </h2>
        <div className="card-items grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 xsm:grid-cols-3 grid-cols-2   gap-x-6 gap-y-8 pt-6">
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
          <SortMovieCard />
        </div>
      </div>
    </>
  );
}

export default SearchResult;
