<script setup lang="ts">
import { Component } from 'vue';
defineProps<{ msg: string, Comp: Component }>()
</script>

<template>
  <div>
    <p>Bar {{ msg }}</p>
    <Comp />
  </div>
</template>