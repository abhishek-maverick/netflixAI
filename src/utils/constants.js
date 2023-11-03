export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const API_TRAILER_URL = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWIzMjI3MDYwZmI3OTcxNDVjNzk5M2IwZjllYzJiZiIsInN1YiI6IjY1NDBjNzk4NDU1N2EwMDEwMGFjYmIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vz_kY1IktbfWgOuvzWMAH4pZZptA6LgNSYlCQyHPpxo",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BACKGROUND_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg";
