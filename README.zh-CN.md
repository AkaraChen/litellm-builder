# LiteLLM Builder: 你的 LLM 网关配置生成器 🚀

**LiteLLM Builder** 是一个“配置即代码”的工具包，用于生成企业级的 LLM 网关配置。

你不再需要手写 YAML，而是在清晰、模块化和类型安全的 TypeScript 中定义你的整个网关——包括供应商、模型和所有设置。然后，构建器会为你生成生产就绪的 `config.yaml` 和 `.env.example`。

## 工作流程 🛠️

只需 4 个简单步骤，就能从代码变成一个配置齐全的网关：

1.  **复制示例**

    从示例文件开始，创建你自己的配置。这个文件属于你，且已被 Git 忽略。

    ```bash
    cp config-example/index.ts config/index.ts
    ```

2.  **定义你的供应商**

    打开 `config/index.ts` 并定义你的供应商。`OpenAICompat` 类可以让你轻松添加任何与 OpenAI 兼容的供应商。

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
        // ✨ 在这里添加你其他的供应商！
      ],
    });
    ```

3.  **运行构建器**

    执行构建任务来生成你的文件。

    ```bash
    deno task build
    ```

4.  **启动！**

    构建器会生成两个文件：
    -   `config.yaml`: 你完整的 LiteLLM 配置文件。
    -   `.env.example`: 一份完美的环境变量清单。

    现在，只需从示例创建 `.env` 文件，填入你的密钥，就可以启动了！

    ```bash
    # 以开发模式启动
    deno task start:dev

    # 或者用 Docker 运行生产环境
    docker-compose up
    ```

## 为什么要用它？🤔

-   🧠 **类型安全**: 在编辑器里就发现配置错误，而不是在生产环境中。
-   🧩 **模块化**: 告别巨型 YAML！将供应商整理成清晰、可复用的模块。
-   ✨ **智能环境处理**: `from_env` 助手会自动为你追踪所需的环境变量。
-   ⚙️ **动态配置**: 需要为开发和生产环境提供不同配置？用个 `if` 就行了，就这么简单。

## 贡献 🤝

有好的想法？发现了 Bug？欢迎参与贡献！请提交 issue 或 pull request。 