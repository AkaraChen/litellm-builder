import { Settings } from "./settings.ts";

export type ModelMapping = Record<string, string>;

export type Provider = {
  name: string;
  api_keys: string[];
  api_base: string;
  model_mapping: ModelMapping;
  litellm_provider: string;
};

export type ModelInfo = {
  id?: string
  db_model?: boolean
  my_custom_key?: string
  key?: string
  max_tokens?: number
  max_input_tokens?: number
  max_output_tokens?: number
  input_cost_per_token?: number
  input_cost_per_character?: number
  input_cost_per_token_above_128k_tokens?: number
  output_cost_per_token?: number
  output_cost_per_character?: number
  output_cost_per_token_above_128k_tokens?: number
  output_cost_per_character_above_128k_tokens?: number
  output_vector_size?: number
  litellm_provider?: string
  mode?: string
}

export type Model = {
  model_name: string;
  litellm_params: {
    model: string;
    api_base: string;
    api_key: string;
  };
  model_info: ModelInfo;
};

export type ModelList = Model[];
export type Config = {
  model_list: ModelList;
} & Settings;
