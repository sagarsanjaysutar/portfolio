<template>
  <div id="app">
    <Navbar />
    <Landing />
    <Projects />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Projects from "./components/project";

export default {
  name: "App",
  components: {
    Navbar,
    Landing,
    Projects,
  },
};
</script>

<style>
@import "./assets/css/v3.style.css";
</style>
