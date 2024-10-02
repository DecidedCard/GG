export interface OverallRanking {
  date: string;
  ranking: number;
  character_name: string;
  world_name: string;
  class_name: string;
  sub_class_name: string;
  character_level: number;
  character_exp: number;
  character_popularity: number;
  character_guildname: string;
}

export interface ResponseOverallRanking {
  ranking: OverallRanking[];
}

export interface UnionRanking {
  ranking: [
    {
      date: string;
      ranking: number;
      character_name: string;
      world_name: string;
      class_name: string;
      sub_class_name: string;
      union_level: number;
      union_power: number;
    }
  ];
}

export interface ResponseUnionRanking {
  ranking: UnionRanking[];
}
