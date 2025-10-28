<template>
  <v-data-table 
    :hide-default-footer="true" 
    :headers="headers" 
    :items="items" 
    :items-per-page="10" 
    :page="currentPage"
  >
    <template #item.actions="{ item }">
     <v-btn icon :elevation="0">
      <v-icon icon="mdi-menu" color="primary"></v-icon>    
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(actionsItem, index) in actions"
              :key="index"
              :value="index"
              @click="this.$emit('toggleActionItem', {itemIndex: item, actionIndex: index})"
            >
            <template #prepend>
              <v-icon 
                :icon="actionsItem.icon" 
                color="primary"
              />
            </template>
              <v-list-item-title>{{ actionsItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>

    <template #no-data>
      <div class="text-center py-4 text-medium-emphasis">
        <v-icon icon="mdi-magnify" color="primary"></v-icon>
        Nenhum registro encontrado
      </div>
    </template>
    
    <template #bottom="{ pageCount, page }">  
      <v-pagination
        v-model="currentPage"
        :length="pageCount"
        :total-visible="5"
        size="small"
        ellipsis
        rounded
        @update:modelValue="this.$emit('changePage', page)"
      />
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: { 
    prop_headers: { type: Array, default: []}, 
    prop_items: { type: Array, default: []}, 
    prop_actions: { type: Array, default: []}, 
  },

  data() {
    return {
      currentPage: 1,
      menu: false,
      headers: [],
      items: [],
      actions: []
    }
  },

  mounted() {
    this.headers = [...this.prop_headers];
    this.items = [...this.prop_items];
    this.actions = [...this.prop_actions];
    if (this.actions.length > 0) this.insertActionsHeader();
  },

  methods: {
    insertActionsHeader() {
      const actionsHeader = { title: "Ações", key: "actions", sortable: false };
      this.headers = [...this.headers, actionsHeader];
    },
  }
}
</script>