import * as yaml from "@std/yaml";
import { logger } from "./utils/logger.ts";
import config from "../config/index.ts";
import { required_envs } from "./utils/params.ts";

logger.info("Config file written to config.yaml");
await Deno.writeTextFile("config.yaml", yaml.stringify(config));
const envs = required_envs();
await Deno.writeTextFile(
  ".env.example",
  envs.map((env) => `${env}=`).join("\n") + "\n",
);
logger.info(
  "Env file written to .env.example, please fill in the values and create .env file",
);
