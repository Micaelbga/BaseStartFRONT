<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Default</v-app-bar-title>
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
