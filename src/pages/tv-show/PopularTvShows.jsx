import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Select,
} from "@headlessui/react";
import { RxCaretDown } from "react-icons/rx";
import clsx from "clsx";
import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

function PopularTvShows() {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];
  const [selected, setSelected] = useState([]);

  return (
    <section className="max-w-container pt-6  pb-10  px-4">
      <h2 className="text-[24px] text-white text-nowrap px-2 ">
        Popular TV Shows
      </h2>
      <div className="flex gap-5 md:flex-nowrap flex-wrap">
        <div className="min-w-[260px] text-white md:sticky top-[70px] md:max-h-[572px] md:overflow-auto py-4 md:h-screen">
          <div className="bg-black-light   rounded-md">
            <div className="relative">
              <Disclosure defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between py-2 px-4">
                  <span className="text-sm/6  font-medium text-white group-data-[hover]:text-white/80 ">
                    Sort
                  </span>
                  <RxCaretDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-white  border-t border-bg_primary px-4 pt-2 pb-3">
                  <p className="pt-1">Sort Results By</p>
                  <div className="relative">
                    <Select
                      className={clsx(
                        "mt-2 block w-full appearance-none rounded-lg border-none bg-bg_primary  py-1.5 px-3 text-sm/6 text-white",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                        // Make the text of each option black on Windows
                        "*:text-black"
                      )}
                    >
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                      <option value="delayed">Delayed</option>
                      <option value="canceled">Canceled</option>
                    </Select>
                    <RxCaretDown className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" />
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
          <div className="bg-black-light mt-4   rounded-md">
            <div className="relative">
              <Disclosure defaultOpen={true}>
                <DisclosureButton className="group flex  w-[calc(100vw-30px)] md:w-full items-center justify-between py-2 px-4">
                  <span className="text-sm/6  font-medium text-white group-data-[hover]:text-white/80 block">
                    Genres
                  </span>
                  <RxCaretDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-white  border-t border-bg_primary px-4 pt-2 pb-3 flex gap-2 overflow-hidden flex-wrap">
                  {genres.map((genre) => (
                    <div key={genre} className=" ">
                      <input
                        type="checkbox"
                        id={genre}
                        name={genre}
                        className="rounded-sm text-pink hidden"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelected([...selected, genre]);
                          } else {
                            setSelected(
                              selected.filter((item) => item !== genre)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={genre}
                        className={`${
                          selected.includes(genre) ? "bg-pink border-none" : ""
                        }  text-[12px] cursor-pointer text-white border border-bg_primary inline-block px-4 rounded-full py-1`}
                      >
                        {genre}
                      </label>
                    </div>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="card-items grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-4 xsm:grid-cols-3 grid-cols-2  gap-x-4 gap-y-7 md:py-4 py-4 ">
          {/* <CardItem /> */}
          {Array(40)
            .fill()
            .map((_, i) => (
              <MovieCard key={i} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default PopularTvShows;
