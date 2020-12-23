<template>
  <div class="container intro-container">
    <div class="row w-100 h-100">
      <div
        class="col-lg-6 col-12 d-flex justify-content-center align-content-center"
        style="flex-direction: column;position: relative"
      >
        <span>
          <h3 class="name" data-aos="fade-left" data-aos-duration="1500">
            Hi, Sagar <br />this side! <br />
          </h3>
          <span class="pre-text" style="color: green"> >> </span>
          <span class="skill">A full stack developer</span>
        </span>
        <button
          class="btn btn-outline-light"
          style="position:absolute; bottom:100px; display:flex; align-self:center"
        >
          View work
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center">
        <img src="../assets/img/Sagar-Yellow.png" class="img-fluid intro-self" />
      </div>
      <!-- <div
        class="col-lg-1 d-flex justify-content-center align-items-center social-column"
        style="flex-direction: column"
      >
        <button class="social mb-4" type="button" title="Linkedin">
          <a href="https://www.linkedin.com/in/sagar-sutar-b3281a179/"
            ><i class="fab fa-linkedin-in fa-lg"></i>
          </a>
        </button>

        <button class="social mb-4" type="button" title="GitHub">
          <a href="https://github.com/sagarsanjaysutar/">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </button>
        <button class="social" type="button" title="Instagram">
          <a href="https://www.instagram.com/notsagarsutar/"
            ><i class="fab fa-instagram fa-lg"></i
          ></a>
        </button>
      </div> -->
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
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
    });
    document.querySelectorAll(".typed-cursor")[0].style.display = "none";
  },
};
</script>

<style>
.intro-container {
  height: 100vh;
  /* background-image: url("../assets/img/Sagar-Dark-Portrait.png");
  background-size: cover;
  background-position: right; */
}

.intro-self {
  border-radius: 50%;
}

.skill {
  font-size: 2.5rem;
  font-weight: 400;
  text-align: left;
}
.name {
  font-size: 5rem;
  font-weight: 600;
  /* -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white; */
}
.pre-text {
  font-size: 2.5rem;
}
</style>
