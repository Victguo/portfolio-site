<template>
  <div class="projects">
    <v-layout>
      <v-container>
        <v-row>
            <template v-for="project in projects">
                <v-col class="proj-col" cols="6" v-bind:key="project.id">
                    <h2>{{project['proj-title']}}</h2>
                    <img class="proj-img" alt="timetable-app" :src="image(project.img)">
                    <span>{{project.description}}</span>
                    <span>Technologies Used:</span>
                    
                    <v-layout class="tech-layout">
                        <template v-for="(technology, i) in project.technologies">
                            <v-flex xs3 v-bind:key="i">
                                <div class="text-center">
                                    <v-btn icon>
                                        <v-icon>{{technology.icon}}</v-icon>
                                    </v-btn>
                                    <div class="caption">{{technology['icon-name']}}</div>
                                </div>
                            </v-flex>
                        </template>
                    </v-layout>
                    
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
.layout {
  height: 100%;
  margin: 0px;
  justify-items: center;
  align-items: center;
}
.proj-col {
  display: flex;
  flex-direction: column;
}
.proj-img {
    object-fit: cover;
    width: 100%;
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
.projects {
  height: 100%;
  /* margin-top: 120px; */
}
.tech-layout {
    max-height: 56px;
}
</style>