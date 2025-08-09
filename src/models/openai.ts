export enum OpenaiGptModel {
  "gpt-4.1" = "gpt-4.1",
  "gpt-4.1-mini" = "gpt-4.1-mini",
  "gpt-4.1-nano" = "gpt-4.1-nano",
  "gpt-5" = "gpt-5",
  "gpt-5-mini" = "gpt-5-mini",
  "gpt-5-nano" = "gpt-5-nano",
}

export enum OpenaiOModel {
  "o3" = "o3",
  "o3-mini" = "o3-mini",
  "o3-mini-high" = "o3-mini-high",
  "o3-mini-medium" = "o3-mini-medium",
  "o3-mini-low" = "o3-mini-low",
  "o4-mini" = "o4-mini",
}

export const openai_gpt_models = Object.values(OpenaiGptModel);

export const openai_o_models = Object.values(OpenaiOModel);

export const openai_models = [
  ...openai_gpt_models,
  ...openai_o_models,
];
