<button on:click>
  <slot />
</button>

<style lang="scss">
  button {
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: #e5e5e533;
    border-radius: 0.5rem;
    color: #494e74;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e5e5e5;
    }
  }
</style>
