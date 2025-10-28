<template>
    <v-text-field append-inner-icon="mdi-timer" v-model="timeString" class="time-picker">
        <v-menu :close-on-content-click="false" activator="parent" v-model="menu">
            <v-time-picker format="24hr" scrollable color="primary" elevation="1" v-model="time" @update:model-value="selectTime" />
        </v-menu>
    </v-text-field>
</template>
<script>
import moment from 'moment';
export default {
    data() {
        return {
            menu: false,
            time: null,
            timeString: null
        }
    },
    created() {
        if(this.prop_time !== null) {
            this.time = this.prop_time
            this.timeString = moment(this.time).format("HH:mm")
        } 
    },
    props: {
        prop_time: {type: Date, default: null}
    },
    methods: {
        selectTime(event) {
            this.timeString = event
            this.$emit('select', event);
            this.menu = false;
        }
    }
}
</script>