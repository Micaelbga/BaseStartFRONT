<template>
    <custom-page>
        <custom-table 
            :prop_headers="headers" 
            :prop_items="items"
            @changePage="teste" 
            :prop_actions="tableActions" 
            @toggleActionItem="triggerActionItem"
        />
        <custom-button prop_text="Ok" prop_icon="mdi-delete" @click="teste"/>
        <custom-button prop_text="Ok" prop_icon="mdi-delete" prop_class="btn-secondary"/>
    </custom-page>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            headers: [
                { title: 'Boat Type', key: 'name' },
                { title: 'Speed(knots)', key: 'speed' },
                { title: 'Length(m)', key: 'length' },
                { title: 'Price($)', key: 'price' },
                { title: 'Year', key: 'year' },
            ],
            items: [
                {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                }, {
                    name: 'Speedster',
                    speed: 35,
                    length: 22,
                    price: 300000,
                    year: 2021,
                },
                {
                    name: 'OceanMaster',
                    speed: 25,
                    length: 35,
                    price: 500000,
                    year: 2020,
                },
                {
                    name: 'Voyager',
                    speed: 20,
                    length: 45,
                    price: 700000,
                    year: 2019,
                },
                {
                    name: 'WaveRunner',
                    speed: 40,
                    length: 19,
                    price: 250000,
                    year: 2022,
                },
                {
                    name: 'SeaBreeze',
                    speed: 28,
                    length: 31,
                    price: 450000,
                    year: 2018,
                },
                {
                    name: 'HarborGuard',
                    speed: 18,
                    length: 50,
                    price: 800000,
                    year: 2017,
                },
                {
                    name: 'SlickFin',
                    speed: 33,
                    length: 24,
                    price: 350000,
                    year: 2021,
                },
                {
                    name: 'StormBreaker',
                    speed: 22,
                    length: 38,
                    price: 600000,
                    year: 2020,
                },
                {
                    name: 'WindSail',
                    speed: 15,
                    length: 55,
                    price: 900000,
                    year: 2019,
                },
                {
                    name: 'FastTide',
                    speed: 37,
                    length: 20,
                    price: 280000,
                    year: 2022,
                },
            ],
            tableActions:[
                {
                    icon: "mdi-delete",
                    name: "Deletar"
                }
            ]
        }
    },

    methods: {
        teste(event) {
            console.log(event);
        },

        triggerActionItem(index) {
            console.log(index);
            
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