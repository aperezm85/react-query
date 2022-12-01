import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCharactersQuery } from "../queries/queries";

const CharactersQuery = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharactersQuery,
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
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
      )}
    </>
  );
};

export default CharactersQuery;
