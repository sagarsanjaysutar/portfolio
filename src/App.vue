<template>
  <div id="app">
    <Navbar />
    <Landing />
    <Projects />
    <Skills />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Projects from "./components/project";
import Skills from "./components/skills";

export default {
  name: "App",
  components: {
    Navbar,
    Landing,
    Projects,
    Skills,
  },
};
</script>

<style>
@import "./assets/css/v3.style.css";
</style>
