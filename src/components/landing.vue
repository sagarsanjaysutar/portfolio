<template>
  <div class="intro-container " id="home">
    <div class="container-fluid h-100">
      <div class="row h-100" style="z-index:2 !important; position: relative">
        <div class="col-lg-6 col-12 intro-row-desc  ">
          <span>
            <h3 class="name" data-aos="fade-left" data-aos-duration="1500">Hi, Sagar <br />this side! <br /></h3>
            <span class="pre-text" style="color: green"> >> </span>
            <span class="skill">A full stack developer</span>
          </span>
        </div>
        <div class="col-lg-6 col-12 intro-row-img  ">
          <div class="img-fluid intro-self"></div>
          <div class="d-flex justify-content-center align-items-center" style="flex-direction: column" v-if="!isMobile()">
            <button class="social" type="button" title="Linkedin">
              <a href="https://www.linkedin.com/in/sagar-sutar-b3281a179/"> <i class="fab fa-linkedin-in fa-lg"></i></a>
            </button>
            <button class="social" type="button" title="Instagram">
              <a href="https://www.instagram.com/notsagarsutar/"> <i class="fab fa-instagram fa-lg"> </i></a>
            </button>
            <button class="social" type="button" title="Instagram">
              <a href="https://github.com/sagarsanjaysutar/"> <i class="fab fa-github fa-lg"> </i></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "landing",
};
</script>

<style>
.intro-container {
  height: 100vh;
}

.intro-row-desc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.intro-row-img {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  z-index: -1;
}

.intro-self {
  background-image: url("../assets/img/Sagar9.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-width: 10rem;
  min-height: 35rem;
  display: flex;
}

.skill {
  font-size: 2.5rem;
  font-weight: 400;
  text-align: left;
}
.name {
  font-size: 5rem;
  font-weight: 600;
  color: #d3d3d3;
}
.pre-text {
  font-size: 2.5rem;
}

@media only screen and (max-width: 600px) {
  .intro-row-desc {
    position: absolute;
    bottom: 10px;
    left: 0px;
  }
  .name {
    font-size: 3.5em;
  }

  .skill {
    font-size: 1.4em;
  }

  .pre-text {
    font-size: 1.4em;
  }
}
</style>
