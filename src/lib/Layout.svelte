<div class="layout">
  <div class="sidebar">
    <slot name="sidebar" />
  </div>
  <div class="preview">
    <slot />
  </div>
</div>

<style>
  .layout {
    display: flex;
    height: 100%;
    position: relative;
  }

  .sidebar {
    position: sticky;
    top: 0;
    height: 100%;
    overflow: auto;
    width: 15rem;
  }

  .preview {
    max-height: 100vh;
    flex-grow: 1;
  }
</style>
