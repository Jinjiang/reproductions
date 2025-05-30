<!--

Usage:

<script lang="ts" setup>
import FooComponent from './foo.vue'
import { ref } from 'vue'
const message = ref('Initial message')
function handleMessageUpdate(newMsg) {
  message.value = newMsg
  console.log('Message updated:', newMsg)
}
</script>

<template>
  <FooComponent title="Custom Title" @update:message="handleMessageUpdate">
    <p>This is a default slot content.</p>
    <template #footer>
      <p>This is a footer slot content.</p>
    </template>
  </FooComponent>
</template>

-->

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

// Define props
const props = defineProps({
  title: {
    type: String,
    default: 'Hello from Foo Component!'
  },
  initialMessage: {
    type: String,
    default: 'Welcome to your Vue SFC!'
  }
})

// Define emits
const emit = defineEmits(['update:message'])

// Use prop for initial message
const message = ref(props.initialMessage)

// Example method to emit event
function updateMessage(newMsg: string) {
  message.value = newMsg
  emit('update:message', newMsg)
}
</script>

<template>
  <div class="foo">
    <h1>{{ props.title }}</h1>
    <p>{{ message }}</p>
    <button @click="updateMessage('Message updated!')">Update Message</button>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.foo {
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>