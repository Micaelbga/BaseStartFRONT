<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon icon="mdi-menu" color="white" @click="$emit('menuToggle')"></v-app-bar-nav-icon>
    <v-app-bar-title>Internal</v-app-bar-title>
    <v-app-bar-nav-icon icon="mdi-cog" color="white" @click="$emit('configToggle')"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
