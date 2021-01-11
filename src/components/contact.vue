<template>
  <div class="contact-container" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading" data-aos="fade-up" data-aos-duration="500">
            Get in touch
          </div>
        </div>
      </div>

      <div class="row p-3">
        <div class="col-12 text-center">
          <div class="d-flex justify-content-center align-items-center">
            <button class="social" type="button" title="Linkedin">
              <a href="https://www.linkedin.com/in/sagar-sutar-b3281a179/"><i class="fab fa-linkedin-in fa-lg"></i> </a>
            </button>
            <button class="social" type="button" title="Mail" id="email">
              <a id="email" href="#">
                <i class="far fa-envelope fa-lg" id="email"></i>
              </a>
            </button>
            <button class="social" type="button" title="GitHub">
              <a href="https://github.com/sagarsanjaysutar/">
                <i class="fab fa-github fa-lg"></i>
              </a>
            </button>
            <button class="social" type="button" title="Instagram">
              <a href="https://www.instagram.com/notsagarsutar/"><i class="fab fa-instagram fa-lg"></i></a>
            </button>
          </div>
          Made with <i class="far fa-heart"></i> by Sagar Sutar.
          <br />
          <small style="color:#d3d3d3; ">Powered by Vue js. Picture courtesy <a href="https://www.instagram.com/rikengothi/">Riken Gothi.</a></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style>
.contact-container {
  height: 100%;
}
</style>
