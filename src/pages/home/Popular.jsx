import Slider from "../../components/slider/Slider";
import SmallMovieCard from "../../components/MovieCard/SmallMovieCard";
import SwitchingTab from "../../components/tab/SwitchingTab";

function Popular() {
  return (
    <section className="pb-10  max-w-container px-4">
      <div className="flex items-center justify-between pb-6">
        <p className="md:text-[24px] sm:text-[22px] text-[20px] font-semibold text-white text-nowrap">
          What&apos;s Popular
        </p>
        <SwitchingTab left="Today" right="This Week" />
      </div>
      <div className="overflow-visible pb-10">
        <Slider delay="1500">
          {Array(10)
            .fill()
            .map((_, i) => (
              <SmallMovieCard key={i} />
            ))}
        </Slider>
      </div>
    </section>
  );
}

export default Popular;
