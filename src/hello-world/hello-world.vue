<script setup lang="ts">
import { ref } from "vue";

defineProps({
  msg: {
    type: String,
    default: "Welcome!",
  },
});

type Link = {
  name: string;
  url: string;
};

const count = ref(0);

const essentialLinks: Link[] = [
  { name: "Core Docs", url: "https://vuejs.org" },
  { name: "Forum", url: "https://forum.vuejs.org" },
  { name: "Community Chat", url: "https://chat.vuejs.org" },
  { name: "Twitter", url: "https://twitter.com/vuejs" },
  { name: "News", url: "https://news.vuejs.org" },
];

const ecosystemLinks: Link[] = [
  { name: "vue-router", url: "https://router.vuejs.org" },
  { name: "vuex", url: "https://vuex.vuejs.org" },
  { name: "vue-devtools", url: "https://github.com/vuejs/vue-devtools" },
  { name: "vue-loader", url: "https://vue-loader.vuejs.org" },
  { name: "awesome-vue", url: "https://github.com/vuejs/awesome-vue" },
];
</script>

<template>
  <div :class="$style.hello">
    <img
      alt="Vue logo"
      src="./logo.png"
    >
    <h1>{{ msg }}</h1>
    <p>
      For a guide, check out the
      <a
        href="https://bit.dev/"
        target="_blank"
        rel="noopener"
      >official docs</a>
      on Bit.
    </p>
    <p>
      <button @click="count++">
        Like: {{ count }}
      </button>
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li
        v-for="link in essentialLinks"
        :key="link.url"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noopener"
        >{{ link.name }}</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li
        v-for="link in ecosystemLinks"
        :key="link.url"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noopener"
        >{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style module>
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
