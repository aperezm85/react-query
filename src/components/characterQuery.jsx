import { useQuery } from "@tanstack/react-query";

import { useParams, Link } from "react-router-dom";
import { getCharacterQuery, getEpisodeQuery } from "../queries/queries";

const CharacterQuery = () => {
  const { characterId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterQuery(characterId),
  });

  const getLocation = (location) => {
    const locationUrlPars = location.url.split("/").filter(Boolean);
    const locationId = locationUrlPars[locationUrlPars.length - 1];
    return locationId;
  };

  return (
    <>
      {isLoading
        ? "Loading..."
        : data && (
            <div className="character">
              <img src={data.image} />
              <div className="name">{data.name}</div>
              <div className="tableContainer">
                <table size="small" aria-label="simple table">
                  <thead>
                    <tr>
                      <td>Feature</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gender</td>
                      <td>{data.gender}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{data.status}</td>
                    </tr>
                    <tr>
                      <td>Species</td>
                      <td>{data.species}</td>
                    </tr>
                    <tr>
                      <td>Origin</td>
                      <td>{data.origin.name}</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>{getLocation(data.location)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>Episodes</h4>
              {data.episode.map((episode) => {
                const episodeUrlParts = episode.split("/").filter(Boolean);
                const episodeId = episodeUrlParts[episodeUrlParts.length - 1];

                return <Episode id={episodeId} key={`episode-${episodeId}`} />;
              })}
            </div>
          )}
    </>
  );
};

function Episode({ id }) {
  const { isLoading, data } = useQuery({
    queryKey: ["episode", id],
    queryFn: () => getEpisodeQuery(id),
  });

  return (
    <>
      {isLoading
        ? "Loading..."
        : data && (
            <article key={id}>
              <Link to={`/episodes/${id}`}>
                <h6>
                  {data.episode}. {data.name} - {data.air_date}
                </h6>
              </Link>
            </article>
          )}
    </>
  );
}

export default CharacterQuery;
