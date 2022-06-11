<script lang="ts">
  import { currentStoryElement } from "../store";
  import IconButton from "./IconButton.svelte";
  import ArrowExpand from "./Icons/ArrowExpand.svelte";
  import Placeholder from "./Placeholder.svelte";
  import SectionHeading from "./SectionHeading.svelte";

  let element;
  let hasPreviewPadding = true;

  currentStoryElement.subscribe((value) => {
    element = value;
  });

  const handleTogglePreviewPadding = () => {
    hasPreviewPadding = !hasPreviewPadding;
  };
</script>

<div class="container">
  <div class="tools">
    <div class="icon-button">
      <IconButton on:click={handleTogglePreviewPadding}>
        <ArrowExpand />
      </IconButton>
    </div>
  </div>
  <div class="preview" class:hasPreviewPadding>
    {#if hasPreviewPadding}
      <SectionHeading>Preview</SectionHeading>
    {/if}
    {#if element}
      <svelte:component this={element} />
    {:else}
      <Placeholder>No component selected</Placeholder>
    {/if}
  </div>
</div>

<style lang="scss">
  .tools {
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .preview {
    width: 100%;
    height: 100%;
    border-top: #e5e5e5 solid thin;

    &.hasPreviewPadding {
      padding: 1rem;
    }
  }
</style>
