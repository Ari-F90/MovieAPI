const urlAPI = "https://api.themoviedb.org/3";
const keyAPI =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs";

export async function loadMovies(param) {
  const resp = await fetch(urlAPI + param, {
    headers: {
      Authorization: keyAPI,
      "Content-type": "application/json;charset=utf-8",
    },
  });
  const data = await resp.json();
  return data;
}
