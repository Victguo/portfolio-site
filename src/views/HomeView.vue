<template>
  <div class="home">
    <v-layout
      margin="0px"
      align-center
      justify-center
      fill-height
    >
      <v-container>
        <v-row>
          <v-spacer />
          <v-col class="d-flex flex-row justify-space-between" align="center" cols="3">
            <img class="home-icon" src="../assets/feicon.svg">
            <v-avatar size="200">
              <img
                class="headshot-image"
                src="../assets/headshot.jpg"
                alt="Headshot"
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex flex-column justify-center">
            <span class="blue-text greetings">Hello There!</span>
            <p class="description">I'm 
              <span class="blue-text">Victor</span>, a 
              <span class="blue-text">Front-End Developer</span> that values user experience just as much as functionality in the applications I create.
              Come take a look at what I've done through my résumé or projects!
            </p>
            <v-btn
              color="#91C4FF"
              elevation="2"
              rounded
            >Résumé</v-btn>
          </v-col>
          <v-spacer />
        </v-row>
      </v-container>
      
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.blue-text {
  color: #91C4FF;
}
.greetings {
  font-size: 24px;
}
.description {
  margin-top: 10px;
  font-size: 20px;
  word-wrap: normal;
}
.headshot-image {
  object-fit: cover;
}
.home-icon {
  height: 200px;
  width: 200px;
}
.home {
  height: 100%;
}
</style>
