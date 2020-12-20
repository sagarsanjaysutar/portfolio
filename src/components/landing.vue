<template>
  <div class="container-fluid intro-container">
    <div class="row w-100 h-100">
      <div class="col-11 d-flex justify-content-center align-content-center" style="flex-direction: column">
        <span>
          <h3 class="text-left name" data-aos="fade-left" data-aos-duration="1500">Hi, I'm Sagar <br /></h3>
          <span class="pre-text" style="color: green"> >>> </span><span class="pre-text mr-2">A</span>
          <span class="skill" id="typed2" ref="skill"> </span>
        </span>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center" style="flex-direction: column">
        <button class="social mb-4" type="button" title="Linkedin">
          <a href="https://www.linkedin.com/in/sagar-sutar-b3281a179/"><i class="fab fa-linkedin-in fa-lg"></i> </a>
        </button>

        <button class="social mb-4" type="button" title="GitHub">
          <a href="https://github.com/sagarsanjaysutar/">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </button>
        <button class="social" type="button" title="Instagram">
          <a href="https://www.instagram.com/notsagarsutar/"><i class="fab fa-instagram fa-lg"></i></a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "landing",
  mounted() {
    new Typed(this.$refs.skill, {
      strings: ["Web Developer", "Mobile Developer", "Programmer"],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 0,
      loop: false,
    });
  },
};
</script>

<style>
.intro-container {
  height: 100vh;
  background-image: url("/public/assets/img/bg/bg-6.jpg");
  background-size: cover;
}
.name {
  font-size: 90px;
  font-weight: 600;
}

.skill {
  font-size: 60px;
  font-weight: 400;
  text-align: left;
}

.pre-text {
  font-size: 60px;
}
</style>
