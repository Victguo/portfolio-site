<template>
  <div class="home">
    <v-layout class="main-layout">
      <v-container>
        <v-row class="home-row">
          <v-col class="icon-col" md="2" cols="12">
            <img class="home-icon" src="../assets/feicon.svg">
          </v-col>
          <v-col class="introduction-col" cols="8" md="4">
            <span class="blue-text greetings">Hello There!</span>
            <p class="description">I'm
              <span class="blue-text">Victor</span>, a 
              <span class="blue-text">Front-End Developer</span> that values user experience just as much as functionality in the applications I create.
              Come take a look at what I've done through my résumé or projects!
            </p>
            <v-btn
              class="resume-btn"
              @click="openResume()"
              rounded
            >Résumé
            </v-btn>
          </v-col>
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
  },
  methods: {
    openResume: function () {
      window.open("resume.pdf", '_blank');
    }
  }
}
</script>

<style scoped>
.main-layout {
  height: 100%;
  /* padding-top: 120px; */
  justify-items: center;
  align-items: center;
}
.icon-col {
  display: flex;
  flex-direction: row;
  justify-content: center; 
}
.introduction-col {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.resume-btn {
  background-color: #91C4FF !important;
  max-width: 200px;
}
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
.home-row {
  justify-content: center;
  align-items: center;
}
</style>
