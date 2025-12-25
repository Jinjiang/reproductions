<template>
  <button
    :class="['btn', `btn-${variant}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
    <span v-if="clickCount > 0" class="count">{{ clickCount }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { incrementCounter } from './utils';

interface Props {
  label?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Click me',
  variant: 'primary',
  disabled: false,
});

const clickCount = ref(0);

const handleClick = () => {
  clickCount.value = incrementCounter(clickCount.value);
};
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  font-size: 14px;
  border: 2px solid;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #0056b3;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #003d82;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #545b62;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #545b62;
  border-color: #3d4347;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.count {
  font-size: 12px;
  padding: 2px 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}
</style>
