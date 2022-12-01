import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getCharactersQuery } from "../queries/queries";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const results = await getCharactersQuery(page);
      setCharacters(results);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="characters">
            {characters?.results?.map((c) => {
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
            {characters?.info?.prev && (
              <button
                className="pagination"
                onClick={() => setPage((page) => page - 1)}
              >
                Previous
              </button>
            )}
            {characters?.info?.next && (
              <button
                className="pagination"
                onClick={() => setPage((page) => page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Characters;
