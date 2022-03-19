<template>
    <v-container>
        <h1>Locais</h1>
        <TabelaLocais/>
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
                TabelaLista : []
            }
          },

        created() {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
            .then(response => response.json())
            .then(json => {this.TabelaLista = json;
        })  

    }

}
</script>

<style scoped>

</style>