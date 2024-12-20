export interface CharacterEpisode {
  id: string;
  name: string;
}

export interface CharacterOrigin {
  id: string;
  name: string;
}

export interface CharacterLocation {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  gender: "Male" | "Female" | "unknown";
  species: string;
  episode: CharacterEpisode[];
  origin: CharacterOrigin[];
  location: CharacterLocation[];
  image: string;
}
