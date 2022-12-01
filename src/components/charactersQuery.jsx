import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCharactersQuery } from "../queries/queries";

const CharactersQuery = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getCharactersQuery(page),
    keepPreviousData: true,
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="characters">
            {data?.results?.map((c) => {
              return (
                <Link to={`/characters/${c.id}`} key={c.id}>
                  <div className="character">
                    <img src={c.image} />
                    <div className="name">{c.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
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
        </>
      )}
    </>
  );
};

export default CharactersQuery;
