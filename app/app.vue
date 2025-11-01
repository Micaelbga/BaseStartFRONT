<template>
  <v-app>
    <NuxtLayout name="internal">
      <Notivue v-slot="item" class="notivue">
        <NotivueSwipe :item="item">
          <Notification :theme="pastelTheme" :item="item" />
        </NotivueSwipe>
      </Notivue>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script>
import { Notivue, Notification, pastelTheme } from 'notivue'
</script>