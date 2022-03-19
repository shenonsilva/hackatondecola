<template>
    <v-container>
        <h1>Blocos Carnavalescos</h1>
        <v-card
    max-width="344"
    v-for="local of tabelalista " :key="local.photo">

    <v-img
      src="local.photo"
      height="200px"
    ></v-img>

    <v-card-title>
      {{local.name}}
    </v-card-title>

    <v-card-subtitle>
      {{local.address}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        
      >
        Clique aqui
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{local.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'TabelaLocais',
    data: () => ({
      show: false,
    }),
    props: {
    tabelalista: {
      type: Array,
      required: true
    }
  }

}
</script>