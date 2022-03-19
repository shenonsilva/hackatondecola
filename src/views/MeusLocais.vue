<template>
    <v-container>
        <TabelaLocais :tabelalista="tabelalista"/>
    </v-container>
</template>

<script>
import TabelaLocais from '../components/TabelaLocais.vue'
export default {
    name: 'MeusLocais',
    components: {
        TabelaLocais
        },
          data() {
            return {
                tabelalista: []
            }
          },

        created() {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
            .then(response => response.json())
            .then(json => {this.tabelalista = json;
        })  

    }

}
</script>

<style scoped>

</style>