<template>
   <v-app>
      <layout-internal-app-bar 
         @menuToggle="triggerDrawerMenu"
         @configToggle="triggerDrawerConfig"
      />
      <custom-drawer 
         @updateDrawer="(drawerMenu = !drawerMenu)" 
         @toggleItem="triggerDrawerMenuItem" 
         :prop_drawer="drawerMenu" 
         :prop_items="drawerMenuItems"
         prop_location="left"
         prop_left="0px"
      />
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
      <layout-internal-footer-bar/>
   </v-app>
</template>
<script>
export default {
   data() {
      return {
         drawerMenu: false,
         drawerMenuItems: [
            { icon: "mdi-home", text: "Home" },
         ],

         drawerConfig: false,
         drawerConfigItems: [
            { icon: "mdi-lightbulb-on", text: "Tema claro" },
            { icon: "mdi-account", text: "Minha conta" },
         ]
      }
   },
   methods: {
      triggerDrawerMenu() {
         this.drawerMenu = !this.drawerMenu
      },

      triggerDrawerConfig() {
         this.drawerConfig = !this.drawerConfig
      },

      triggerDrawerConfigItem(index){
         switch(index) {
            case 0:
               this.triggerDrawerConfig()
               this.updateAppTheme()
               break;
            case 1:
               this.$router.push("/home")
               break;
            case 2:
               break;
            default:
               break;

         }
      },

      triggerDrawerMenuItem(index){
         switch(index) {
            case 0:
               this.$router.push("/home");
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