<template>
   <v-app>
      <layout-default-app-bar @configToggle="triggerDrawerConfig"/>
      <custom-drawer 
         @updateDrawer="(drawerConfig = !drawerConfig)" 
         @toggleItem="triggerDrawerConfigItem" 
         :prop_drawer="drawerConfig"
         :prop_items="drawerConfigItems"
         prop_location="top"
         prop_right="0px"
      />
      <v-main>
         <slot />
      </v-main>
      <layout-default-footer-bar/>
   </v-app>
</template>
<script>
export default {
   data() {
      return {
         drawerConfig: false,
         drawerConfigItems: [
            { icon: "mdi-lightbulb-on", text: "Tema claro" },
         ]
      }
   },
   methods: {
      triggerDrawerConfig() {
         this.drawerConfig = !this.drawerConfig
      },
      triggerDrawerConfigItem(index){
         switch(index) {
            case 0:
               this.updateAppTheme()
               break;
            case 1:
               break;
            case 2:
               break;
            default:
               break;

         }
      },

      updateAppTheme() {
         if(this.$vuetify.theme.global.current.dark) {
            this.drawerConfigItems[0] = { icon: "mdi-lightbulb-on", text: "Tema claro" },
            this.$vuetify.theme.change('light')
         }
         else{
            this.drawerConfigItems[0] = { icon: "mdi-lightbulb-off-outline", text: "Tema escuro" },
            this.$vuetify.theme.change('dark')
         }
      }
   }
}
</script>