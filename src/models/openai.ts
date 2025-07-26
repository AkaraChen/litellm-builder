export enum OpenaiGptModel {
  "gpt-3.5-turbo" = "gpt-3.5-turbo",
  "gpt-4" = "gpt-4",
  "gpt-4-turbo" = "gpt-4-turbo",
  "gpt-4.1" = "gpt-4.1",
  "gpt-4.1-mini" = "gpt-4.1-mini",
  "gpt-4.1-nano" = "gpt-4.1-nano",
}

export enum OpenaiOModel {
  "o1" = "o1",
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
