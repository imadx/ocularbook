<script>
  import InformationCircle from "./Icons/InformationCircle.svelte";
</script>

<div>
  <InformationCircle />
  <slot />
</div>

<style>
  div {
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Source Sans Pro", sans-serif;
    color: #494e7488;
    background-color: #f6f6f8;
    border-radius: 0.5rem;
  }
</style>
