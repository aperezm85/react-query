export default async function ({ endpoint }) {
  const BASE_URL = "https://rickandmortyapi.com/api";

  const res = await fetch(`${BASE_URL}/${endpoint}`);

  return await res.json();
}
