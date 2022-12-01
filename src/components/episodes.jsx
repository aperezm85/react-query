import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getEpisodesQuery } from "../queries/queries";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await getEpisodesQuery(page);
      setEpisodes(result);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="episodes">
          <h2>Episodes</h2>
          {episodes.results?.map((episode) => (
            <article key={episode.id}>
              <Link to={`/episodes/${episode.id}`}>
                <h6>
                  {episode.episode} - {episode.name} <em>{episode.airDate}</em>
                </h6>
              </Link>
            </article>
          ))}
          {episodes?.info?.prev && (
            <button
              className="pagination"
              onClick={() => setPage((page) => page - 1)}
            >
              Previous
            </button>
          )}
          {episodes?.info?.next && (
            <button
              className="pagination"
              onClick={() => setPage((page) => page + 1)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Episodes;
