<template>
  <private-root :data="[]" />
</template>
<script setup lang="ts">
  import { getCurrentInstance } from 'vue';

  import PrivateRoot from './layout/root.vue';


  console.log('getCurrentInstance = ', getCurrentInstance());
</script>

