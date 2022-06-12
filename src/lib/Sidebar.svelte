<script lang="ts">
  import Heading from ".//Heading.svelte";
  import { currentStoryKey, stories } from "../store";
  import SectionHeading from "./SectionHeading.svelte";

  let storiesValue = [];
  let currentStoryKeyValue;

  stories.subscribe((value) => {
    storiesValue = value;
  });

  currentStoryKey.subscribe((value) => (currentStoryKeyValue = value));

  const updateCurrentElement = (story: string) => currentStoryKey.set(story);

  const getFormattedStoryName = (storyName: string): string => {
    return storyName.split("/").slice(-1)[0];
  };
</script>

<div class="container">
  <Heading noMargin>Ocular</Heading>
  <div class="sticky-header">
    <SectionHeading noMargin>Components</SectionHeading>
  </div>

  <ul>
    {#each storiesValue as story}
      <li
        title={story}
        class:active={currentStoryKeyValue === story}
        on:click={() => updateCurrentElement(story)}
      >
        {getFormattedStoryName(story)}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .container {
    background-color: #f6f6f8;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    border-right: #e5e5e5 solid thin;
    overflow: auto;
  }

  .sticky-header {
    position: sticky;
    top: -1rem;
    padding: 1rem 0;
    background-color: #f6f6f8;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Source Sans Pro", sans-serif;
    color: #494e74;

    li {
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: transparent;
      transition: background-color 0.3s;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #707078;

      &:hover {
        background-color: #d9d9d9;
      }

      &.active {
        color: #494e74;

        &::after {
          $size-indicator-dot: 6px;

          content: "";
          background-color: #494e74;
          border-radius: $size-indicator-dot;
          width: $size-indicator-dot;
          height: $size-indicator-dot;
          display: inline-block;
        }
      }
    }
  }
</style>
