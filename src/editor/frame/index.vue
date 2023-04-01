<template>
  <header-layout />
  <content-layout>
    <material-tools />
    <modifier-tools />
    <render />
  </content-layout>
</template>
<script setup lang="ts">
  import Render from '../render/index.vue';

  import ContentLayout from './components/content-layout.vue';
  import HeaderLayout from './components/header-layout.vue';
  import MaterialTools from './components/material-tools/index.vue';
  import ModifierTools from './components/modifier-tools/index.vue';
</script>

