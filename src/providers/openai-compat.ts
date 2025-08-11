import { openai_models } from "@/models/openai.ts";
import { Provider } from "@/types/index.ts";

interface OpenAICompatParams {
  name: string;
  api_keys: string[];
  api_base?: string;
  model_mapping?: Record<string, string>;
  models?: string[];
}

export class OpenAICompat implements Provider {
  name: string;
  api_keys: string[];
  api_base: string;
  litellm_provider = "openai";
  model_mapping: Record<string, string>;
  constructor(params: OpenAICompatParams) {
    const {
      name,
      api_keys,
      api_base = "https://api.openai.com/v1",
      model_mapping = {},
      models = openai_models,
    } = params;
    this.name = name;
    this.api_keys = api_keys;
    this.api_base = api_base;
    this.model_mapping = model_mapping;
    models.map((model) => {
      this.model_mapping[model] = model;
    });
  }
}
