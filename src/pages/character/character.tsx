import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_CHARACTER_BY_ID } from "./api/get-character-by-id.query";

import style from "./character.module.css";
import {
  RiHeartFill,
  RiMenLine,
  RiQuestionMark,
  RiSkullLine,
  RiWomenLine,
} from "@remixicon/react";
import { CharacterEpisode } from "./interface/character.interface";

export default function CharacterPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, image, species, status, gender, location, origin, episode } =
    data.character;

  const episodes = episode.slice(0, 5);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardLeft}>
          <img src={image} className={style.cardImage} />
          <div className={style.cardTitle}>
            <h4>{name}</h4>
          </div>
        </div>
        <div className={style.stats}>
          <div className={style.status}>
            <p>Status:</p>
            {status === "Alive" && <RiHeartFill size={20} color="red" />}
            {status === "Dead" && <RiSkullLine size={20} />}
            {status === "unknown" && <RiQuestionMark size={20} color="black" />}
          </div>
          <div className={style.status}>
            <p>Gender: </p>
            {gender === "Female" && <RiWomenLine size={20} color="pink" />}
            {gender === "Male" && <RiMenLine size={20} color="blue" />}
            {gender === "unknown" && <RiQuestionMark size={20} color="black" />}
          </div>

          <div className={style.status}>
            <p>Specie:</p>
            <span>{species}</span>
          </div>

          <div className={style.status}>
            <p>Location:</p>
            <span>{location.name}</span>
          </div>
          <div className={style.status}>
            <p>Origin:</p>
            <span>{origin.name}</span>
          </div>
          <div className={style.status}>
            <p>Episodes:</p>
            <ul className={style.episodeContainer}>
              {episodes.map((episode: CharacterEpisode) => (
                <li key={episode.id} className={style.episode}>
                  - {episode.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
