<template>
  <v-navigation-drawer
    v-model="drawer"
    :temporary="true"
    :location="prop_location"
    :style="`left: ${prop_left}; right: ${prop_right}; height: ${prop_height} !important; width: ${prop_width} !important;`"
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="item"
        :title="item.text"
        @click="$emit('toggleItem', index)"
      >
        <template #prepend>
          <v-icon 
            :icon="item.icon" 
            color="primary"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    prop_drawer: {
      type: Boolean,
      default: false
    },
    prop_items: {
      type: Array,
      default: []
    },
    prop_location: {
      type: String,
      default: 'top'
    },
    prop_left: {
      type: String,
      default: 'unset'
    },
    prop_right: {
      type: String,
      default: 'unset'
    },
    prop_height: {
      type: String,
      default: 'unset'
    },
    prop_width: {
      type: String,
      default: 'unset'
    }
  },
  data() {
    return {
      drawer: this.prop_drawer,
      items: this.prop_items
    }
  },
  watch: {
    prop_drawer(newV, oldV) {
      this.drawer = newV
    },

    drawer(newVal) {
      if (newVal !== this.prop_drawer) {
        this.$emit('updateDrawer', newVal)
      }
    }
  }
}
</script>
