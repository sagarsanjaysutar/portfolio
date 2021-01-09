<template>
  <span>
    <div class="container contact-container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading " data-aos="fade-up" data-aos-duration="500">
            Get in touch
          </div>
          <div class="section-subtitle" data-aos="fade-up" data-aos-duration="500"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="w-100 d-flex justify-content-center">
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
        </div>
      </div>
    </div>
    <div class="container bg-dark p-3 d-flex justify-content-center align-items-center align-content-center h-100">
      <div class="row w-100">
        <div class="col-12 text-center">
          <span class="mr-lg-5">
            Made with <i class="far fa-heart"></i> by
            <a href="https:\\sagarsutar.in">Sagar Sutar.</a>
          </span>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style>
.contact-container {
  height: 40vh;
}
</style>
