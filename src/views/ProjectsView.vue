<template>
  <div class="projects">
    <v-layout class="main-layout">
      <v-container>
        <v-row class="proj-row">
            <template v-for="project in projects">
                <v-col class="proj-col" lg="6" md="12" v-bind:key="project.id">
                    <h2 class="proj-title">{{project['proj-title']}}</h2>
                    <img class="proj-img" alt="timetable-app" :src="image(project.img)">
                    <span>{{project.description}}</span>
                    <h3>Technologies Used:</h3>
                    <v-layout class="tech-layout">
                        <template v-for="(technology, i) in project.technologies">
                            <v-flex class="tech-list" xs3 v-bind:key="i">
                                <div class="text-center">
                                    <v-btn icon>
                                        <v-icon>{{technology.icon}}</v-icon>
                                    </v-btn>
                                    <div class="caption">{{technology['icon-name']}}</div>
                                </div>
                            </v-flex>
                        </template>
                    </v-layout>
                    <template v-if="project.github.visible">
                        <h3>View on GitHub:</h3>
                        <v-btn icon>
                            <v-icon>mdi-github</v-icon>
                        </v-btn>
                    </template>
                    <span v-else>GitHub repository is private, contact to view source code.</span>
                </v-col>
            </template>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import projectData from '../assets/projects.json';

export default {
    name: 'ProjectView',
    data: function () {
        return {
            projects: projectData
        }
    },
    methods: {
        image(name) {
            return require("../assets/" + name);
        }
    }
}
</script>

<style scoped>
.main-layout {
    min-height: 100vh;
    padding-top: 120px;
    justify-items: center;
    /* align-items: center; */
}
.proj-col {
    display: flex;
    flex-direction: column;
    max-height: 664px;
}
.proj-img {
    float: left;
    object-fit: contain;
    max-height: 424px;
}
.proj-row {
    max-height: 664px;
}
.proj-title {
    text-decoration: underline;
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
  object-fit: contain;
}
.home-icon {
  height: 200px;
  width: 200px;
}
.projects {
  height: 100%;
  /* margin-top: 120px; */
}
.tech-layout {
    max-width: 50%;
}
</style>