<template>
    <v-text-field append-inner-icon="mdi-calendar" v-model="dateString" class="date-picker">
        <v-menu :close-on-content-click="false" activator="parent" v-model="menu">
            <v-date-picker color="primary" elevation="1" v-model="date" @update:modelValue="selectDate" />
        </v-menu>
    </v-text-field>
</template>
<script>
import moment from 'moment';
export default {
    data() {
        return {
            menu: false,
            date: null,
            dateString: null
        }
    },
    created() {
        if(this.prop_date !== null) {
            this.date = this.prop_date
            this.dateString = moment(this.date).format("DD/MM/YYYY")
        } 
    },
    props: {
        prop_date: {type: Date, default: null}
    },
    methods: {
        selectDate(event) {
            this.dateString = moment(event).format("DD/MM/YYYY")
            this.$emit('select', event);
            this.menu = false;
        }
    }
}
</script>