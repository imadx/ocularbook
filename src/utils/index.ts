export const getFiles = async (): Promise<string[]> => {
  const internalSources = await import.meta.glob("../../**/*.stories.svelte");

  return [...Object.keys(internalSources)];
};
