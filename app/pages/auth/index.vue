<template>
    <custom-page>
        <custom-table 
            :prop_headers="[]" 
            :prop_items="[]"
            @changePage="teste" 
            :prop_actions="[]" 
            @toggleActionItem="triggerActionItem"
        />
        <v-btn prependIcon="mdi-delete" class="btn-primary">Ok</v-btn>
        <v-text-field label="teste"/>
        <v-select />
        <input-date-picker />
        <input-time-picker />
    </custom-page>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        console.log(this.$axios.get('/user'))
    },
    methods: {
        teste(event) {
        },

        triggerActionItem(index) {
            switch(index) {
            case 0:
               break;
            case 1:
               break;
            case 2:
               break;
            default:
               break;

         }
        }
    }
}
</script>