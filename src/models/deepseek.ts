import { ModelMapping } from "../types.ts";

export enum DeepseekModel {
  "deepseek-chat" = "deepseek-chat",
  "deepseek-reasoner" = "deepseek-reasoner",
}

export const deepseek_models = Object.values(DeepseekModel);

export const bce_deepseek_model_mapping: ModelMapping = {
  "deepseek-r1": DeepseekModel["deepseek-reasoner"],
  "deepseek-v3": DeepseekModel["deepseek-chat"],
};
