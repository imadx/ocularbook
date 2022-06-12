<script lang="ts">
  import { onMount } from "svelte";

  import Layout from "./lib/Layout.svelte";
  import Preview from "./lib/Preview.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import { currentStoryKey } from "./store";
  import { log } from "./utils";

  let globalConfig;

  onMount(async () => {
    const existingConfigurationFiles = import.meta.glob("/**/.ocularbook/Global.svelte");

    const existingConfigurationFilePath = Object.keys(existingConfigurationFiles)?.[0];

    if (!existingConfigurationFilePath) {
      log(
        "No global configurations have been defined. Create a `.ocularbook/Global.svelte` file to setup global configurations"
      );
      return;
    }

    globalConfig = await (await import(/* @vite-ignore */ existingConfigurationFilePath)).default;
  });

  onMount(() => {
    console.log(window.location.hash);
    currentStoryKey.set(window.location.hash.replace(/^#/, ""));
  });
</script>

<svelte:component this={globalConfig} />

<Layout>
  <Sidebar slot="sidebar" />
  <Preview />
</Layout>

<style>
  :global(html, body, #app) {
    margin: 0;
    height: 100%;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
