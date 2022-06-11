<script>
  export let noMargin = false;
</script>

<h3 class:noMargin>
  <slot />
</h3>

<style lang="scss">
  h3 {
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: #8e91a8;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    margin-bottom: 1rem;

    &.noMargin {
      margin-bottom: 0;
    }
  }
</style>
