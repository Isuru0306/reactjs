const BASE_URL = "https://api.themoviedb.org/3/";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
const OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTk1ZTdjNWE4OTdkOTg1MWJhZTVlOGQxZDZhNDc4MiIsInN1YiI6IjY1ZDk1Mzg2Njg4Y2QwMDE4NjEwZDYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.058MEXUZtNvbv2MBauJqWhQGkziktsj1_mYmIAsyITU",
  },
};

export { BASE_URL, OPTIONS, BACKDROP_BASE_URL, SMALL_IMAGE_BASE_URL };
