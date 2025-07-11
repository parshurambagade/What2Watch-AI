/* eslint-disable react/prop-types */
import MovieText from "../pages/browse/MovieText";
import VideoBackground from "./VideoBackground";

const MainMovieSection = ({ mainMovie }) => {
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <section
      aria-label="Main movie"
      className="-mt-12 lg:-mt-20 bg-black inset-0 "
    >
      <VideoBackground movieId={id} />
      <div className="flex items-center z-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
          <MovieText title={original_title} overview={overview} />
        </div>
      </div>
    </section>
  );
};

export default MainMovieSection;
