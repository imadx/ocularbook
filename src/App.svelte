<script lang="ts">
  import { onMount } from "svelte";

  import Layout from "./lib/Layout.svelte";
  import Preview from "./lib/Preview.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import { log } from "./utils";

  let globalConfig;

  onMount(async () => {
    const globalConfigFile = "/.ocularbook/Global.svelte";
    const existingConfigurationFiles = import.meta.glob(
      "/.ocularbook/Global.svelte",
    );
    if (Object.keys(existingConfigurationFiles)) {
      log(
        "No global configurations have been defined. Create a `.ocularbook/Global.svelte` file to setup global configurations",
      );
      return;
    }

    globalConfig = await (
      await import(/* @vite-ignore */ globalConfigFile)
    ).default;
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
