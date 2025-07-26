import { Provider } from "@/types/index.ts";
import { OpenAICompat } from "./openai-compat.ts";

interface GeminiParams extends Pick<Provider, "api_keys" | "model_mapping"> {
  models: string[];
}

export class Gemini extends OpenAICompat {
  constructor(params: GeminiParams) {
    super({
      name: "gemini",
      api_keys: params.api_keys,
      api_base: "https://generativelanguage.googleapis.com/v1beta/openai/",
      model_mapping: params.model_mapping,
      models: params.models,
    });
  }
}
