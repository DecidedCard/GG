export interface Skill {
  date: string;
  character_class: string;
  character_skill_grade: string;
  character_skill: CharacterSkill[];
}

export interface CharacterSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_effect_next: string;
  skill_icon: string;
}

export interface LinkSkill {
  date: string;
  character_class: string;
  character_link_skill: CharacterLinkSkill;
  character_link_skill_preset_1: CharacterLinkSkillPreset[];
  character_link_skill_preset_2: CharacterLinkSkillPreset[];
  character_link_skill_preset_3: CharacterLinkSkillPreset[];
  character_owned_link_skill: CharacterLinkSkillPreset;
  character_owned_link_skill_preset_1: CharacterLinkSkillPreset;
  character_owned_link_skill_preset_2: CharacterLinkSkillPreset;
  character_owned_link_skill_preset_3: CharacterLinkSkillPreset;
}

export interface CharacterLinkSkillPreset {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

interface CharacterLinkSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_effect_next: string;
  skill_icon: string;
}
