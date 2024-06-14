<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
const counter = useState('counter', () => 3000)
const { data: foo, pending } = await useFetch('/api/foo')
const runtimeConfig = useRuntimeConfig()
console.log(import.meta.env)
console.log(runtimeConfig)
</script>

<template>
  <div>
    <h1>About</h1>
    <HelloWorld />
    <img src="/favicon.ico">
    <img
      src="~/assets/vue.svg"
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
