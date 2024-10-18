export interface CashItem {
  date: string;
  character_gender: string;
  character_class: string;
  character_look_mode: string;
  preset_no: number;
  cash_item_equipment_base: CashItemEquipmentBase[];
  cash_item_equipment_preset_1: CashItemEquipmentBase[];
  cash_item_equipment_preset_2: CashItemEquipmentBase[];
  cash_item_equipment_preset_3: CashItemEquipmentBase[];
  additional_cash_item_equipment_base: CashItemEquipmentBase[];
  additional_cash_item_equipment_preset_1: CashItemEquipmentBase[];
  additional_cash_item_equipment_preset_2: CashItemEquipmentBase[];
  additional_cash_item_equipment_preset_3: CashItemEquipmentBase[];
}

interface CashItemEquipmentBase {
  cash_item_equipment_part: string;
  cash_item_equipment_slot: string;
  cash_item_name: string;
  cash_item_icon: string;
  cash_item_description: string;
  cash_item_option: CashItemOption[];
  date_expire: string;
  date_option_expire: string;
  cash_item_label: string;
  cash_item_coloring_prism: CashItemColorIngPrism;
  item_gender: string;
}

interface CashItemColorIngPrism {
  color_range: string;
  hue: number;
  saturation: number;
  value: number;
}

interface CashItemOption {
  option_type: string;
  option_value: string;
}
