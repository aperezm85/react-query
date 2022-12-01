import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCharacterQuery, getEpisodeQuery } from "../queries/queries";

const Episode = () => {
  const { episodeId } = useParams();

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getEpisodeQuery(episodeId);
      setEpisode(result);
    }
    fetchData();
  }, []);

  return (
    <div className="episode">
      {episode && (
        <>
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <br />
          <h4>Characters</h4>
          {episode?.characters?.map((character) => {
            const characterUrlParts = character.split("/").filter(Boolean);
            const characterId = characterUrlParts[characterUrlParts.length - 1];
            return <Character id={characterId} key={characterId} />;
          })}
        </>
      )}
    </div>
  );
};

function Character({ id }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCharacterQuery(id);
      setCharacter(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {character && (
        <article key={id}>
          <Link to={`/characters/${id}`}>
            <h6>{character.name}</h6>
          </Link>
        </article>
      )}
    </>
  );
}

export default Episode;
