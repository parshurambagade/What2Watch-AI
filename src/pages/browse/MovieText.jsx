/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { useSelector } from "react-redux";
import { languageText } from "../../utils/languages";
import { Link } from "react-router-dom";

const MovieText = ({ title, overview }) => {
  const lang = useSelector((state) => state.config.lang);
  const { mainMovieId } = useSelector((state) => state.movies);
  return (
    <div className="absolute top-0 left-0 w-full min-h-[calc(100vh-64px)] px-4  md:px-8 lg:px-20 pt-[25%] md:pt-[10%] flex  flex-col gap-4 bg-gradient-to-l md:bg-gradient-to-r from-black text-white items-end md:items-start">
      {/* text container  */}
      <div className=" flex flex-wrap flex-col gap-3 max-w-max w-1/2 xl:w-1/3">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-right md:text-left mx-2  mr-4 md:mx-0  text-ellipsis">
          {title}
        </h1>
        <p className="hidden md:flex md:text-base xl:text-lg text-ellipsis">
          {overview?.slice(0, 150)}...
        </p>
      </div>

      {/* buttons container  */}
      <div className="flex gap-4 justify-start md:flex-row flex-col-reverse">
        <Link
          to={"/movie/" + mainMovieId}
          className="cursor-pointer bg-white hover:bg-opacity-80 py-1 lg:py-3 px-3 mr-4 md:mr-0 lg:px-6 text-black rounded-lg text-sm lg:text-lg xl:text-base flex gap-1 lg:gap-2 items-center justify-center"
        >
          <span className="lg:text-xl">
            <FaPlay />
          </span>
          {languageText?.browsePage[lang]?.play}
        </Link>
        <Link
          to={"/movie/" + mainMovieId}
          className="cursor-pointer bg-gray-700 bg-opacity-80 hover:bg-opacity-100 py-1 lg:py-3 px-3 lg:px-6 text-white text-sm lg:text-lg xl:text-base rounded-lg sm:flex hidden gap-1 lg:gap-2 items-center justify-center  mr-4 md:mr-0"
        >
          <span className="text-xs lg:text-2xl">
            <ImInfo />
          </span>
          {languageText?.browsePage[lang]?.moreInfo}
        </Link>
      </div>
    </div>
  );
};

export default MovieText;
