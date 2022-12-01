import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getCharacterQuery, getEpisodeQuery } from "../queries/queries";

const Character = ({ id }) => {
  const { characterId } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCharacterQuery(characterId);
      setCharacter(result);
    }
    fetchData();
  }, []);

  const getLocation = (location) => {
    const locationUrlPars = location.url.split("/").filter(Boolean);
    const locationId = locationUrlPars[locationUrlPars.length - 1];
    return locationId;
  };

  return (
    <>
      {character && (
        <div className="character">
          <img src={character.image} />
          <div className="name">{character.name}</div>
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
                  <td>{character.gender}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{character.status}</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{character.species}</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>{character.origin.name}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{getLocation(character.location)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>Episodes</h4>
          {character.episode.map((episode) => {
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
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getEpisodeQuery(id);
      setEpisode(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {episode && (
        <article key={id}>
          <Link to={`/episodes/${id}`}>
            <h6>
              {episode.episode}. {episode.name} - {episode.air_date}
            </h6>
          </Link>
        </article>
      )}
    </>
  );
}

export default Character;
