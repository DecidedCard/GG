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

export type SeedRanking = {
  date: string;
  ranking: number;
  character_name: string;
  world_name: string;
  class_name: string;
  sub_class_name: string;
  character_level: number;
  theseed_floor: number;
  theseed_time_record: number;
};

export interface ResponseSeedRanking {
  ranking: SeedRanking[];
}

export type CharacterId = {
  ocid: string;
};

export type Basic = {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: 0;
  character_exp: 0;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
  character_date_create: string;
  access_flag: string;
  liberation_quest_clear_flag: string;
};

export type Popularity = {
  date: string;
  popularity: number;
};

export type FinalStat = {
  stat_name: string;
  stat_value: string;
};

export type CharacterStatInfo = {
  date: string;
  character_class: string;
  final_stat: FinalStat[];
  remain_ap: number;
};

export interface CharacterInfo {
  basicInfo: Basic;
  statInfo: CharacterStatInfo;
}
