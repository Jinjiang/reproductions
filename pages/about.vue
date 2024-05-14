<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
const counter = useState('counter', () => 3000)
const { data: foo, pending } = await useFetch('/api/foo')
const runtimeConfig = useRuntimeConfig()
// debug
import.meta.env
// debug
runtimeConfig
</script>

<template>
  <div>
    <h1>About</h1>
    <HelloWorld />
    <img src="/favicon.ico">
    <img src="~/assets/zhlint.svg">
    <img
      src="../vue.svg"
      style="width: 200px;"
    >
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
    <p v-if="pending">
      Loading...
    </p>
    <p v-else>
      {{ foo }}
    </p>
  </div>
</template>
