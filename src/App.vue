<template>
  <v-app>
    <header-app-bar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HeaderAppBar from './components/HeaderAppBar';

export default {
  name: 'App',

  components: {
    HeaderAppBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
    background-color: var(--v-background-base);
}
</style>