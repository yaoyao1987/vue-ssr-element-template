<template>
  <div class="container">
    <div>
      <h1 class="title">vue-ssr-element-template</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // useContext,
  // ref,
  // useAsync,
  // useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',
  // serverCacheKey: () => 'IndexPage',
  // setup() {
  //   const { $axios } = useContext()
  //   /** SSR API fetch */
  //   const responseAsync = useAsync(async () => {
  //     return await $axios.$get(
  //       'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
  //     )
  //   })
  //   /** CSR API fetch */
  //   const responseFetch = ref()
  //   useFetch(async () => {
  //     const data = await $axios.$get(
  //       'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
  //     )
  //     responseFetch.value = data
  //   })

  //   console.log(`responseAsync`, responseAsync)
  //   console.log(`responseFetch`, responseFetch)

  //   return {
  //     responseAsync,
  //     responseFetch,
  //   }
  // },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
