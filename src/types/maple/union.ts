export interface unionArtifactCharacterInfo {
  date: string;
  union_artifact_effect: UnionArtifactEffect[];
  union_artifact_crystal: UnionArtifactCrystal[];
  union_artifact_remain_ap: number;
}

interface UnionArtifactCrystal {
  name: string;
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
