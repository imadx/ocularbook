import { writable } from "svelte/store";

const _stories = import.meta.glob("../../**/*.stories.svelte");

export const stories = writable([...Object.keys(_stories)]);

export const currentStoryKey = writable(null);
export const currentStoryElement = writable(null);

currentStoryKey.subscribe(async (value) => {
  currentStoryElement.set((await import(/* @vite-ignore */ value)).default);
});
