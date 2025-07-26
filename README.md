# LiteLLM Builder: The Gateway Config Generator 🚀

**LiteLLM Builder** is a "Configuration as Code" toolkit for generating enterprise-grade LLM gateway configurations.

Instead of handwriting YAML, you define your entire gateway—providers, models, and settings—in clean, modular, and type-safe TypeScript. The builder then generates a production-ready `config.yaml` and `.env.example` for you.

## The Workflow 🛠️

Here's how you go from code to a fully configured gateway in 4 simple steps:

1.  **Copy the Example**

    Bootstrap your personal configuration from the example. This file is yours and is ignored by Git.

    ```bash
    cp config-example/index.ts config/index.ts
    ```

2.  **Define Your Providers**

    Open `config/index.ts` and define your providers. The `OpenAICompat` class makes it easy to add any OpenAI-compatible provider.

    ```typescript
    // config/index.ts
    import { build_config } from "@/build.ts";
    import { OpenAICompat } from "@/providers/openai-compat.ts";
    import { from_env } from "@/utils/params.ts";
    import { openai_gpt_models } from "@/models/openai.ts";

    export default build_config({
      providers: [
        new OpenAICompat({
          name: "openai",
          api_keys: [ from_env`OPENAI_API_KEY` ],
          models: [
            ...openai_gpt_models
          ],
        }),
        // ✨ Add your other providers here!
      ],
    });
    ```

3.  **Run the Builder**

    Execute the build task to generate your files.

    ```bash
    deno task build
    ```

4.  **Launch!**

    The builder generates two files:
    -   `config.yaml`: Your complete LiteLLM configuration.
    -   `.env.example`: A perfect list of all required environment variables.

    Now, just create a `.env` file based on the example, add your secrets, and you're ready to spin up your gateway with `docker-compose up`!

    For automated deployments, see our [**Ansible Deployment Guide**](./docs/deployment-with-ansible.md).

## Why Use This? 🤔

-   🧠 **Type-Safe**: Catch configuration errors in your editor, not in production.
-   🧩 **Modular**: No more giant YAML! Organize providers into clean, reusable modules.
-   ✨ **Auto-generates `.env.example`**: Never forget an environment variable again.
-   ⚙️ **Dynamic**: Need different configs for dev vs. prod? Just use an `if` statement. It's that simple.

## Contributing 🤝

Got an idea? Found a bug? Contributions are welcome! Please open an issue or submit a pull request. 