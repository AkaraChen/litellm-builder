export type ModelMapping = Record<string, string>;

export type Provider = {
  name: string;
  type: "openai";
  api_keys: string[];
  api_base: string;
  model_mapping: ModelMapping;
};

export type Model = {
  model_name: string;
  litellm_params: {
    model: string;
    api_base: string;
    api_key: string;
  };
};

export type ModelList = Model[];

export type Settings = {
  litellm_settings?: {
    drop_params?: boolean;
  };
};

export type Config = {
  model_list: ModelList;
} & Settings;
