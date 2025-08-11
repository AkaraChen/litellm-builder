export enum AnthropicModel {
  // 3.5
  "claude-3-5-haiku-latest" = "claude-3-5-haiku-latest",
  "claude-3-5-sonnet-latest" = "claude-3-5-sonnet-latest",

  // 3.7
  "claude-3-7-sonnet-latest" = "claude-3-7-sonnet-latest",

  // 4.0
  "claude-opus-4-0" = "claude-opus-4-0",
  "claude-sonnet-4-0" = "claude-sonnet-4-0",

  // 4.1
  "claude-opus-4-1" = "claude-opus-4-1",
}

export const anthropic_models = Object.values(AnthropicModel);
