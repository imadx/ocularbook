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
  }

  .sidebar {
    width: 15rem;
  }

  .preview {
    flex-grow: 1;
  }
</style>
