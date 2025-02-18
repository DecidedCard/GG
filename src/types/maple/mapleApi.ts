import { CashItem } from "./cashItem";
import type { Item } from "./item";
import { LinkSkill, Skill } from "./skill";
import {
  UnionArtifactCharacterInfo,
  UnionCharacterInfo,
  UnionRaiderCharacterInfo,
} from "./union";

export interface BaseRanking {
  ranking: number;
  character_name: string;
  class_name: string;
  sub_class_name?: string;
}

// 종합 랭킹 type
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

export interface CharacterId {
  ocid: string;
}

export interface CharacterData {
  statInfo: CharacterStatInfo;
  itemInfo: Item;
  fifthSkillInfo: Skill;
  sixthSkillInfo: Skill;
  symbolInfo: CharacterSymbol;
  linkSkillInfo: LinkSkill;
  unionCharacterInfo: UnionCharacterInfo;
  unionArtifactInfo: UnionArtifactCharacterInfo;
  unionRaiderInfo: UnionRaiderCharacterInfo;
  basicInfo: Basic;
  cashItemInfo: CashItem;
  popularityInfo: Popularity;
}

export interface Basic {
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
}

export interface Popularity {
  date: string;
  popularity: number;
}

export interface FinalStat {
  stat_name: string;
  stat_value: string;
}

export interface CharacterStatInfo {
  date: string;
  character_class: string;
  final_stat: FinalStat[];
  remain_ap: number;
}

export interface CharacterInfo {
  basicInfo: Basic;
  statInfo: CharacterStatInfo;
}

export interface CharacterSymbol {
  date: string;
  character_class: string;
  symbol: Symbol[];
}

export interface Symbol {
  symbol_name: string;
  symbol_icon: string;
  symbol_description: string;
  symbol_force: string;
  symbol_level: number;
  symbol_str: string;
  symbol_dex: string;
  symbol_int: string;
  symbol_luk: string;
  symbol_hp: string;
  symbol_drop_rate: string;
  symbol_meso_rate: string;
  symbol_exp_rate: string;
  symbol_growth_count: number;
  symbol_require_growth_count: number;
}
