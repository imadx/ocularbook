<script>
  export let noMargin = false;
</script>

<h1 class:noMargin>
  <slot />
</h1>

<style lang="scss">
  h1 {
    font-weight: lighter;
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
    color: #494e74;
    margin-bottom: 1rem;

    &.noMargin {
      margin-bottom: 0;
    }
  }
</style>
