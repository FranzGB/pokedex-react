export interface IPokemon {
  id:                       number;
  name:                     string;
  base_experience:          number;
  height:                   number;
  order:                    number;
  weight:                   number;
  abilities:                Ability[];
  moves:                    Move[];
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
}

export interface Ability {
  is_hidden: boolean;
  slot:      number;
  ability:   MoreInfo;
}

export interface MoreInfo {
  name: string;
  url:  string;
}



export interface Move {
  move:                  MoreInfo;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  version_group:     MoreInfo;
  move_learn_method: MoreInfo;
}

export interface Type {
  slot: number;
  type: MoreInfo;
}

export interface Versions {
  "generation-i":    GenerationI;
}

export interface Sprites {
  back_default:       string;
  back_female:        string|null;
  back_shiny:         string;
  back_shiny_female:  string|null;
  front_default:      string;
  front_female:       string |null;
  front_shiny:        string;
  front_shiny_female: string | null;
  other?:             Other;
}

export interface Other {
  "official-artwork": {
    "front_default": string
  };
}
export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:  string;
  back_gray:     string;
  front_default: string;
  front_gray:    string;
}




export interface Home {
  front_default:      string;
  front_female:       string |null;
  front_shiny:        string;
  front_shiny_female: string |null;
}



export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      MoreInfo;
}
export enum Types {
  Bug = "Bug",
  Dark = "Dark",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}
