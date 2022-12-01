import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";

import { getCharacterQuery, getEpisodeQuery } from "../queries/queries";

const EpisodeQuery = () => {
  const { episodeId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["episode", episodeId],
    queryFn: () => getEpisodeQuery(episodeId),
  });

  return (
    <div className="episode">
      {isLoading
        ? "Loading..."
        : data && (
            <>
              <h2>{data.name}</h2>
              <p>{data.air_date}</p>
              <br />
              <h4>Characters</h4>
              {data?.characters?.map((character) => {
                const characterUrlParts = character.split("/").filter(Boolean);
                const characterId =
                  characterUrlParts[characterUrlParts.length - 1];
                return <CharacterQuery id={characterId} key={characterId} />;
              })}
            </>
          )}
    </div>
  );
};

function CharacterQuery({ id }) {
  const { isLoading, data } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterQuery(id),
  });

  return (
    <>
      {isLoading
        ? "Loading..."
        : data && (
            <article key={id}>
              <Link to={`/characters/${id}`}>
                <h6>{data.name}</h6>
              </Link>
            </article>
          )}
    </>
  );
}

export default EpisodeQuery;
