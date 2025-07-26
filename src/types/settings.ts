// deno-lint-ignore-file no-explicit-any
export type CacheParams = {
  type?: "redis";
  host?: string;
  port?: number;
  password?: string;
  namespace?: string;
  redis_startup_nodes?: { host: string; port: string }[];
  service_name?: string;
  sentinel_nodes?: [string, number][];
  qdrant_semantic_cache_embedding_model?: string;
  qdrant_collection_name?: string;
  qdrant_quantization_config?: string;
  similarity_threshold?: number;
  s3_bucket_name?: string;
  s3_region_name?: string;
  s3_aws_access_key_id?: string;
  s3_aws_secret_access_key?: string;
  s3_endpoint_url?: string;
  supported_call_types?: (
    | "acompletion"
    | "atext_completion"
    | "aembedding"
    | "atranscription"
  )[];
  mode?: "default_off";
  ttl?: number;
  disable_copilot_system_to_assistant?: boolean;
};

export type LiteLLMSettings = {
  success_callback?: string[];
  failure_callback?: string[];
  callbacks?: string[];
  service_callbacks?: string[];
  turn_off_message_logging?: boolean;
  modify_params?: boolean;
  enable_preview_features?: boolean;
  redact_user_api_key_info?: boolean;
  mcp_aliases?: Record<string, string>;
  langfuse_default_tags?: string[];
  set_verbose?: boolean;
  json_logs?: boolean;
  default_fallbacks?: string[];
  request_timeout?: number;
  force_ipv4?: boolean;
  content_policy_fallbacks?: Record<string, string[]>[];
  context_window_fallbacks?: Record<string, string[]>[];
  cache?: boolean;
  cache_params?: CacheParams;
  disable_end_user_cost_tracking?: boolean;
  disable_end_user_cost_tracking_prometheus_only?: boolean;
  key_generation_settings?: Record<string, any>;
  disable_add_transform_inline_image_block?: boolean;
  disable_hf_tokenizer_download?: boolean;
  enable_json_schema_validation?: boolean;
  disable_copilot_system_to_assistant?: boolean;
  drop_params?: boolean;
};

export type GeneralSettings = {
  completion_model?: string;
  disable_spend_logs?: boolean;
  disable_spend_updates?: boolean;
  disable_master_key_return?: boolean;
  disable_retry_on_max_parallel_request_limit_error?: boolean;
  disable_reset_budget?: boolean;
  disable_adding_master_key_hash_to_db?: boolean;
  enable_jwt_auth?: boolean;
  enforce_user_param?: boolean;
  allowed_routes?: string[];
  key_management_system?: string;
  master_key?: string;
  database_url?: string;
  database_connection_pool_limit?: number;
  database_connection_timeout?: number;
  allow_requests_on_db_unavailable?: boolean;
  custom_auth?: string;
  max_parallel_requests?: number;
  global_max_parallel_requests?: number;
  infer_model_from_keys?: boolean;
  background_health_checks?: boolean;
  health_check_interval?: number;
  alerting?: string[];
  alerting_threshold?: number;
  use_client_credentials_pass_through_routes?: boolean;
  health_check_details?: boolean;
  public_routes?: string[];
  alert_types?: string[];
  enforced_params?: string[];
  enable_oauth2_auth?: boolean;
  use_x_forwarded_for?: string;
  service_account_settings?: Record<string, any>[];
  image_generation_model?: string;
  store_model_in_db?: boolean;
  store_prompts_in_spend_logs?: boolean;
  max_request_size_mb?: number;
  max_response_size_mb?: number;
  proxy_budget_rescheduler_min_time?: number;
  proxy_budget_rescheduler_max_time?: number;
  proxy_batch_write_at?: number;
  proxy_batch_polling_interval?: number;
  alerting_args?: Record<string, any>;
  custom_key_generate?: string;
  allowed_ips?: string[];
  embedding_model?: string;
  default_team_disabled?: boolean;
  alert_to_webhook_url?: Record<string, string>;
  key_management_settings?: Record<string, any>[];
  allow_user_auth?: boolean;
  user_api_key_cache_ttl?: number;
  disable_prisma_schema_update?: boolean;
  litellm_key_header_name?: string;
  moderation_model?: string;
  custom_sso?: string;
  allow_client_side_credentials?: boolean;
  admin_only_routes?: string[];
  use_azure_key_vault?: boolean;
  use_google_kms?: boolean;
  spend_report_frequency?: string;
  ui_access_mode?: "admin_only";
  litellm_jwtauth?: Record<string, any>;
  litellm_license?: string;
  oauth2_config_mappings?: Record<string, string>;
  pass_through_endpoints?: Record<string, any>[];
  enable_oauth2_proxy_auth?: boolean;
  forward_openai_org_id?: boolean;
  forward_client_headers_to_llm_api?: boolean;
  maximum_spend_logs_retention_period?: string;
  maximum_spend_logs_retention_interval?: string;
};

export type RouterSettings = {
  routing_strategy?:
    | "simple-shuffle"
    | "least-busy"
    | "usage-based-routing"
    | "latency-based-routing"
    | "usage-based-routing-v2";
  redis_host?: string;
  redis_password?: string;
  redis_port?: string;
  enable_pre_call_checks?: boolean;
  allowed_fails?: number;
  cooldown_time?: number;
  disable_cooldowns?: boolean;
  enable_tag_filtering?: boolean;
  retry_policy?: {
    AuthenticationErrorRetries?: number;
    TimeoutErrorRetries?: number;
    RateLimitErrorRetries?: number;
    ContentPolicyViolationErrorRetries?: number;
    InternalServerErrorRetries?: number;
  };
  allowed_fails_policy?: {
    BadRequestErrorAllowedFails?: number;
    AuthenticationErrorAllowedFails?: number;
    TimeoutErrorAllowedFails?: number;
    RateLimitErrorAllowedFails?: number;
    ContentPolicyViolationErrorAllowedFails?: number;
    InternalServerErrorAllowedFails?: number;
  };
  content_policy_fallbacks?: Record<string, string[]>[];
  fallbacks?: Record<string, string[]>[];
  default_max_parallel_requests?: number;
  default_priority?: number;
  polling_interval?: number;
  max_fallbacks?: number;
  default_litellm_params?: Record<string, any>;
  timeout?: number;
  stream_timeout?: number;
  debug_level?: "DEBUG" | "INFO";
  client_ttl?: number;
  cache_kwargs?: Record<string, any>;
  routing_strategy_args?: Record<string, any>;
  model_group_alias?: Record<string, string>;
  num_retries?: number;
  default_fallbacks?: string[];
  caching_groups?: [string, string][];
  alerting_config?: any;
  assistants_config?: any;
  set_verbose?: boolean;
  retry_after?: number;
  provider_budget_config?: any;
  context_window_fallbacks?: Record<string, string[]>[];
  redis_url?: string;
  cache_responses?: boolean;
  router_general_settings?: any;
  optional_pre_call_checks?: string[];
  ignore_invalid_deployments?: boolean;
};

export type CallbackSettings = {
  otel?: {
    message_logging?: boolean;
  };
};

export type Settings = {
  litellm_settings?: LiteLLMSettings;
  general_settings?: GeneralSettings;
  router_settings?: RouterSettings;
  callback_settings?: CallbackSettings;
};
