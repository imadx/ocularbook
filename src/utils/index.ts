export const getFiles = async (): Promise<string[]> => {
  const internalSources = await import.meta.glob("../../**/*.stories.svelte");

  return [...Object.keys(internalSources)];
};

export const log = (...message: string[]) => {
  console.log(
    `%cOcularbook%c ${message.join(" ")}`,
    "color:white; background: #4056ff; border-radius: 6px; padding: 0.2rem",
    "color:unset;",
  );
};
