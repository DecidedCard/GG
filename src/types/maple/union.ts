export interface UnionArtifactCharacterInfo {
  date: string;
  union_artifact_effect: UnionArtifactEffect[];
  union_artifact_crystal: UnionArtifactCrystal[];
  union_artifact_remain_ap: number;
}

export interface UnionArtifactCrystal {
  name: Crystal;
  validity_flag: string;
  date_expire: string;
  level: number;
  crystal_option_name_1: string;
  crystal_option_name_2: string;
  crystal_option_name_3: string;
}

interface UnionArtifactEffect {
  name: string;
  level: number;
}

export type Crystal =
  | "크리스탈 : 주황버섯"
  | "크리스탈 : 슬라임"
  | "크리스탈 : 뿔버섯"
  | "크리스탈 : 스텀프"
  | "크리스탈 : 스톤골렘"
  | "크리스탈 : 발록"
  | "크리스탈 : 자쿰"
  | "크리스탈 : 핑크빈"
  | "크리스탈 : 파풀라투스";

export interface UnionRaiderCharacterInfo {
  date: string;
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_block: UnionBlock[];
  use_preset_no: number;
  union_raider_preset_1: UnionRaiderPreset;
  union_raider_preset_2: UnionRaiderPreset;
  union_raider_preset_3: UnionRaiderPreset;
  union_raider_preset_4: UnionRaiderPreset;
  union_raider_preset_5: UnionRaiderPreset;
}

interface UnionRaiderPreset {
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_block: UnionBlock[];
}

export interface UnionBlock {
  block_type: string;
  block_class: string;
  block_level: string;
  block_control_point: BlockControlPoint;
  block_position: BlockControlPoint[];
}

interface BlockControlPoint {
  x: number;
  y: number;
}

interface UnionInnerStat {
  stat_field_id: string;
  stat_field_effect: string;
}
