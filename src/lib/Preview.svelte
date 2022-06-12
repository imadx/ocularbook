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
  .container {
    height: 100%;
    max-height: 100vh;

    &.hasPreviewPadding {
      height: calc(100% + 3rem);
    }
  }

  $size-tools-height: 3rem;

  .tools {
    padding: 1rem;
    display: flex;
    align-items: center;
    height: $size-tools-height;
    background-color: #f6f6f8;
  }

  .preview {
    width: 100%;
    max-height: calc(100vh - $size-tools-height);
    border-top: #e5e5e5 solid thin;

    &.hasPreviewPadding {
      padding: 1rem;
    }
  }
</style>
