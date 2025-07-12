export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_PIC =
  "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png";

// export const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: import.meta.env.TMDB_API_AUTHORIZATION_KEY,
//   },
// };

export const CORS_ORIGIN_PROXY = "https://api.allorigins.win/get?url=";
export const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
// export const TMDB_API_KEY = "";

export const TMDB_NOW_PLAYING_MOVIES = `${CORS_ORIGIN_PROXY}${encodeURIComponent(
  `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${TMDB_API_KEY}`
)}`;

export const MOVIE_VIDEOS = `https://api.themoviedb.org/3/movie/`;

export const TMDB_MOVIE_CREDITS = `https://api.themoviedb.org/3/movie/`;
export const TMDB_PERSON_MOVIE_CREDITS = `https://api.themoviedb.org/3/person/`;

export const IMG_CDN_URL = `https://image.tmdb.org/t/p/`;

export const TMDB_POPULAR_MOVIES = `${CORS_ORIGIN_PROXY}${encodeURIComponent(
  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${TMDB_API_KEY}`
)}`;

export const TMDB_TOP_RATED_MOVIES = `${CORS_ORIGIN_PROXY}${encodeURIComponent(
  `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${TMDB_API_KEY}`
)}`;

export const TMDB_UPCOMING_MOVIES = `${CORS_ORIGIN_PROXY}${encodeURIComponent(
  `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${TMDB_API_KEY}`
)}`;

export const TMDB_GET_MOVIES_BY_KEYWORD = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&include_adult=false&language=en-US&page=1&query=`;

export const TMDB_GET_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/`;
export const TMDB_GET_PERSON_DETAILS = `https://api.themoviedb.org/3/person/`;

export const GPT_PROMPT =
  "Act as a movie recommandation system, Give only the names of 5 movies that are related to the provided topic, dont give numbering, only give names comma separated. (result shlould look like: 'bhool bhooliya, aparichit, jadoo, raaz, bhoot') topic is: ";

export const MX_PLAYER_IMAGE_BASE_URL = "https://qqcdnpictest.mxplay.com/";

export const MX_PLAYER_DATA_API1 =
  "https://api.mxplayer.in/v1/web/home/tab/87c3ddc974dcf12294e9412bec44b097?platform=com.mxplay.desktop&content-languages=hi,en";

export const MX_PLAYER_DATA_API2 =
  "https://api.mxplayer.in/v1/web/home/tab/87c3ddc974dcf12294e9412bec44b097?next=b0550db420ea3492531f28b73a1c0b66&platform=com.mxplay.desktop&content-languages=hi,en";

export const MX_PLAYER_DATA_API3 =
  "https://api.mxplayer.in/v1/web/home/tab/87c3ddc974dcf12294e9412bec44b097?next=4e1ab56ad7923ec732e480a8486a1b33&platform=com.mxplay.desktop&content-languages=hi,en";

export const MX_PLAYER_DATA_API4 =
  "https://api.mxplayer.in/v1/web/home/tab/87c3ddc974dcf12294e9412bec44b097?next=65f9c44bac619a24d1d7787fd07b84d4&platform=com.mxplay.desktop&content-languages=hi,en";

export const BACKEND_ENDPOINT = "https://what2watch-ai.vercel.app/api";
