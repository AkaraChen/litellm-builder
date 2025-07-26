import { Config, ModelList, Provider } from "./types/index.ts";
import { Settings } from "./types/settings.ts";

type BuildConfigParams = {
  providers: Provider[];
} & Settings;

export const build_config = (
  { providers, ...settings }: BuildConfigParams,
): Config => {
  const model_list: ModelList = providers.flatMap((provider) => {
    const from_mapping = Object.entries(provider.model_mapping || {}).map(
      ([litellm_model, model_name]) => ({
        model_name,
        litellm_model: litellm_model,
      }),
    );

    return from_mapping.flatMap(({ model_name, litellm_model }) => {
      return provider.api_keys.map((api_key) => ({
        model_name,
        litellm_params: {
          model: litellm_model,
          api_base: provider.api_base,
          api_key,
        },
      }));
    });
  });
  return {
    model_list,
    ...settings,
  };
};
