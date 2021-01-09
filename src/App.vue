<template>
  <div id="app">
    <Navbar />
    <Landing />
    <Projects />
    <About />
    <Skills />
    <Contact />

    <span v-if="5 === 0"> </span>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Projects from "./components/project";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default {
  name: "App",
  components: {
    Navbar,
    Landing,
    Projects,
    About,
    Skills,
    Contact,
  },
};
</script>

<style>
@import "./assets/css/v3.style.css";
@import "./assets/css/v3.mobile.css" (max-width: 480px);
</style>
