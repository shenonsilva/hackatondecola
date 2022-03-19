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
    }

}
</script>

<style scoped>

</style>