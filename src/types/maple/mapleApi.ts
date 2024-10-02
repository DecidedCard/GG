// 종합 랭킹 type
export type OverallRanking = {
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
};

export interface ResponseOverallRanking {
  ranking: OverallRanking[];
}

// 유니온 랭킹 type
export type UnionRanking = {
  date: string;
  ranking: number;
  character_name: string;
  world_name: string;
  class_name: string;
  sub_class_name: string;
  union_level: number;
  union_power: number;
};

export interface ResponseUnionRanking {
  ranking: UnionRanking[];
}

export type DojangRanking = {
  date: string;
  ranking: number;
  character_name: string;
  world_name: string;
  class_name: string;
  sub_class_name: string;
  character_level: number;
  dojang_floor: number;
  dojang_time_record: number;
};

export interface ResponseDojangRanking {
  ranking: DojangRanking[];
}
