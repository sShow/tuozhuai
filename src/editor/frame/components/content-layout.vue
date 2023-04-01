<template>
  <div :class="$style['content']">
    <slot />
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="postcss" module>
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
