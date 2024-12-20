import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../../../ui/loader/loader";
import LinkCard from "../../../../ui/link-card/link-card";
import styles from "./sidebar.module.css";

import { GET_CHARACTERS } from "./queries/get-characters.query";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Character } from "../../../../../pages/character/interface/character.interface";

export default function Sidebar() {
  const [page, setPage] = useState(1);
  const { data, loading, fetchMore, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const { results, info } = data.characters;

  const fetchMoreData = () => {
    if (info.next) {
      fetchMore({
        variables: { page: page + 1 },
      });
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container} id="charactersContainer">
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMoreData}
        hasMore={!!info.next}
        loader={<Loader />}
        scrollableTarget="charactersContainer"
      >
        {results.map((character: Character) => (
          <LinkCard
            key={character.id}
            label={character.name}
            link={`/character/${character.id}`}
            subLabel={character.species}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
