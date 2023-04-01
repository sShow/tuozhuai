<template>
  <div :class="$style['main-ui']">
    <render-core />
  </div>
</template>
<script setup lang="ts">
  import RenderCore from '@editor/render/core/index.vue';
</script>
<style lang="postcss" module>
  .main-ui {
    width: 100%;
  }

  :global {
    [role="materials-root"] {
      & > * {
        pointer-events: none !important;
      }
    }
  }
</style>
