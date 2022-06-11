<script lang="ts">
  import Layout from "./lib/Layout.svelte";
  import Preview from "./lib/Preview.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
</script>

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
