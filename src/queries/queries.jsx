import sleep from "../sleep";
import fetch from "../fetch";

export const getCharactersQuery = async (page = 1) => {
  const ENDPOINT = `character/?page=${page}`;
  const c = await fetch({ endpoint: ENDPOINT });
  // await sleep(3);
  return c;
};

export const getCharacterQuery = async (id) => {
  const ENDPOINT = "character";
  const c = await fetch({ endpoint: `${ENDPOINT}/${id}` });
  // await sleep(3);
  return c;
};

export const getEpisodesQuery = async (page = 1) => {
  const ENDPOINT = `episode/?page=${page}`;
  const c = await fetch({ endpoint: ENDPOINT });
  // await sleep(3);
  return c;
};

export const getEpisodeQuery = async (episodeId) => {
  const ENDPOINT = "episode";
  const c = await fetch({ endpoint: `${ENDPOINT}/${episodeId}` });
  // await sleep(3);
  return c;
};
