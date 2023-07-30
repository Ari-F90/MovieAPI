const keyAPI =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs";

export class MovieApiRepo {
  url;
  constructor() {
    this.url = "https://api.themoviedb.org/3";
  }

  async loadMoviesAPI(param) {
    const resp = await fetch(this.url + param, {
      headers: {
        Authorization: keyAPI,
        "Content-type": "application/json;charset=utf-8",
      },
    });
    const movies = await resp.json();
    if (!movies) {
      throw new Error("Failed to load movies from the API");
    }
    return movies;
  }

  async loadOneMovie(id) {
    const resp = await fetch(`${this.url}/movie/${id}`, {
      headers: {
        Authorization: keyAPI,
        "Content-type": "application/json;charset=utf-8",
      },
    });
    const movieData = await resp.json();
    return movieData;
  }
}
