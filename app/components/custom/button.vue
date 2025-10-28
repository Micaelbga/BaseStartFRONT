<template>
    <v-btn 
        style="
            border-radius: 12px !important;
        " 
        :class="prop_class"
        min-height="50"
        min-width="180"
        @click="$emit('click')"
    >
        <template #prepend>
            <v-icon :icon="prop_icon"></v-icon>
        </template>
        <p>
            {{ prop_text }}
        </p>
    </v-btn>
</template>
<script>
export default {
    props: {
        prop_icon: {type: String, default: null},
        prop_text: {type: String, default: null},
        prop_class:  {type: String, default: 'btn-primary'},
    }
}
</script>