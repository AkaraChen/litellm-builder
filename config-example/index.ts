import { build_config } from "@/build.ts";
import { OpenAICompat } from "@/providers/openai-compat.ts";
import { from_env } from "@/utils/params.ts";

export default build_config({
  providers: [
    new OpenAICompat({
      name: "openai",
      api_keys: [
        from_env`OPENAI_API_KEY`,
      ],
      api_base: "https://api.openai.com/v1",
      models: [
        "gpt-4o",
      ],
    }),
  ],
});
