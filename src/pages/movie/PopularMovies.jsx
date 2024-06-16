import Select from "react-select";

import MovieCard from "../../components/MovieCard/MovieCard";

function PopularMovies() {
  const options = [
    { value: "populatity-desending", label: "Popularity Descending" },
    { value: "asending", label: "Popularity Ascending" },
    { value: "rating-des", label: "Rating Descending" },
    { value: "rating-asc", label: "Rating Ascending" },
    {
      value: "Release Date Ascending",
      label: "Release Date Ascending",
    },
    {
      value: "Release Date Descending",
      label: "Release Date Descending",
    },
    { value: "rating-des", label: "Rating Descending" },
  ];
  return (
    <div className="max-w-container py-8 md:py-12 px-4">
      <div className="flex gap-4 md:items-center justify-between flex-wrap md:flex-nowrap flex-col md:flex-row">
        <h2 className="text-[24px] text-white text-nowrap px-2">
          Popular Movies
        </h2>
        <div className="flex gap-3 flex-wrap md:flex-nowrap items-center">
          <Select
            options={options}
            // defaultValue={options[0]}
            closeMenuOnSelect={false}
            isClearable={true}
            className="w-full md:min-w-[270px] md:w-[270px]"
            placeholder="Sort By"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "var(--black-light)",
                color: "white",
                borderRadius: "30px",
                padding: "0 10px",
                border: "1px solid var(--black-light)",
                outline: "1px solid var(--black-light)",
                ":hover": {
                  border: "1px solid var(--black-light)",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "#fff" : "#000    ",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "white",
              }),
            }}
          />
          <Select
            options={options}
            // defaultValue={options[0]}
            closeMenuOnSelect={false}
            isClearable={true}
            isMulti
            className="w-full md:min-w-[270px]   md:max-w-[600px] "
            placeholder="Select Genres"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "var(--black-light)",
                color: "white",
                borderRadius: "30px",
                padding: "0 10px",
                border: "1px solid var(--black-light)",
                outline: "1px solid var(--black-light)",
                ":hover": {
                  border: "1px solid var(--black-light)",
                },
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "#fff" : "#000    ",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "white",
              }),
              multiValue: (styles) => {
                return {
                  ...styles,
                  backgroundColor: "black",
                  color: "white",
                  padding: "0 5px",
                  borderRadius: "15px",
                };
              },
              multiValueLabel: (styles) => ({
                ...styles,
                color: "white",
                marginBottom: "2px",
                fontSize: "10px",
              }),
              multiValueRemove: (styles) => ({
                ...styles,
                color: "white",
                ":hover": {
                  color: "var(--pink)",
                },
              }),
            }}
          />

          {/* <Select
            options={options}
            defaultValue={options[0]}
            closeMenuOnScroll={true}
            isMulti
          /> */}
        </div>
      </div>
      {/* <div className="card-items flex flex-wrap justify-between   gap-x-4 gap-y-8 pt-6"> */}
      <div className="card-items grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 xsm:grid-cols-3 grid-cols-2   gap-x-4 gap-y-6 pt-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default PopularMovies;
