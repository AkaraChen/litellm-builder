const envs: string[] = [];

export const from_env = (strings: TemplateStringsArray, ...args: string[]) => {
  const full_text = strings.reduce((acc, str, index) => {
    if (index < args.length) {
      return acc + str + args[index];
    }
    return acc + str;
  }, "").toUpperCase();
  envs.push(full_text);
  return `os.environ/${full_text}`;
};

export const required_envs = () => envs;
