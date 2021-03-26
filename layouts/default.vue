<template>
  <div class="container">
    <!-- <app-header /> -->
    <Nuxt />
    <!-- <app-footer /> -->
    <!-- <back-top></back-top> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import useUser from '@/compositions/useUser'

export default defineComponent({
  name: 'Default',
  serverCacheKey: () => 'Default',
  setup() {
    useAsync(() => {
      const { retryLogin } = useUser()
      if (process.server) {
        return false
      }
      const token = window.localStorage.getItem('token')

      // TODO
      if (token) {
        retryLogin(token)
      }
    })
  },
})
</script>
