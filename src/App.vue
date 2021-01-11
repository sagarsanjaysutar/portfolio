<template>
  <div id="app">
    <Navbar />
    <Landing />
    <Projects />
    <About />
    <Skills />
    <Contact />
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
html {
  scroll-behavior: smooth;
}
body {
  background-color: black !important;
  color: #fefefe !important;
  margin: 0px;
  padding: 0px;
  font-family: "Poppins", sans-serif !important;
  font-display: swap;
  cursor: default;
}

a {
  cursor: default;
}

/* Common */
.social {
  background-color: black;
  border-radius: 50%;
  border: 0px;
  color: white;
  margin: 1rem;
  height: 50px;
  width: 50px;
}

.social a {
  color: white;
}
.social a:hover {
  color: #d3d3d3;
}

.section-heading {
  padding: 1.5rem;
  font-size: 60px;
  font-weight: 500;
  background: url("/assets/img/hj.png");
  background-size: 150px 40px;
  background-repeat: no-repeat;
  background-position: left 30px bottom 20px;
}

.navbar-dark .navbar-toggler {
  border: 0px !important;
}

@media only screen and (max-width: 600px) {
  .section-heading {
    font-size: 2.5em;
  }

  .email {
    max-width: 30%;
  }
}

/* Loader */

.loader-wrapper {
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
