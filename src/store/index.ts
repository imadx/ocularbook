import { getFiles } from "../utils";
import { writable } from "svelte/store";

const _stories = await getFiles();

export const stories = writable([..._stories]);

export const currentStoryKey = writable(null);
export const currentStoryElement = writable(null);

currentStoryKey.subscribe(async (value) => {
  if (!value) {
    return null;
  }

  const importedComponent = (await import(/* @vite-ignore */ `/${value}`))
    .default;

  currentStoryElement.set(importedComponent);
});
