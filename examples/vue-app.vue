<script setup lang="ts">
import { MyVueComponent } from '../src';
</script>

<template>
  <div>
    <MyVueComponent label="Primary Button" variant="primary" />
    <MyVueComponent label="Secondary Button" variant="secondary" />
    <MyVueComponent label="Disabled Button" variant="primary" :disabled="true" />
  </div>
</template>
