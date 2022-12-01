import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getEpisodesQuery } from "../queries/queries";

const EpisodesQuery = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data, isFetching, isPreviousData } = useQuery({
    queryKey: ["episodes", page],
    queryFn: () => getEpisodesQuery(page),
    keepPreviousData: true,
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="episodes">
          <h2>Episodes</h2>
          {data?.results?.map((episode) => (
            <article key={episode.id}>
              <Link to={`/episodes/${episode.id}`}>
                <h6>
                  {episode.episode} - {episode.name} <em>{episode.airDate}</em>
                </h6>
              </Link>
            </article>
          ))}
          {data?.info?.prev && (
            <button
              className="pagination"
              onClick={() => setPage((page) => page - 1)}
            >
              Previous
            </button>
          )}
          {data?.info?.next && (
            <button
              className="pagination"
              onClick={() => setPage((page) => page + 1)}
              disabled={isFetching}
            >
              Next
            </button>
          )}
          {isFetching ? <span> Loading...</span> : null}
        </div>
      )}
    </>
  );
};

export default EpisodesQuery;
