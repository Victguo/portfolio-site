<template>
  <v-app-bar flat absolute color="transparent" dark height="120px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <!-- <div
            :class="{'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,'title font-weight-bold': $vuetify.breakpoint.smAndDown, }"
          >Victor G.</div> -->
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#home',options )"
              text
              to="/"
            >Home</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#projects',options )"
              text
              to="/projects"
            >Projects</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  }
};
</script>
