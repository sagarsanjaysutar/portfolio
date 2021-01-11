<template>
  <div class="about-container" id="about">
    <div class="container">
      <div class="row" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-12 section-heading">Few words about me</div>
      </div>
      <div class="row ">
        <div class="col-12 col-lg-6 mr-0 pr-0">
          <div class="about-image img-fluid"></div>
        </div>
        <div class="col-12 col-lg-6 ml-0 pl-0">
          <div class="card about-card " :class="isMobile() ? '' : 'bl'">
            <p>
              I'm Sagar Sutar, a <i>full stack developer, dank memer and a cyclist. </i> I love to code, design and to keep myself sane, I cycle. I spend most of my time elevating myself in every
              possible way. May that be polishing my skills, surrounding myself with insightful people or consuming knowledge via multiple channels. All and all, I aim to be a better person than I was
              yesterday.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <span v-if="!isMobile()" class="about-background-text">ME</span> -->
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style>
.about-container {
  min-height: 100vh;
  width: 100%;
  margin-bottom: 5rem;
  position: relative;
}
.about-background-text {
  writing-mode: vertical-rl;
  position: absolute;
  text-align: left;
  top: 10rem;
  left: 1rem;
  font-size: 12rem;
  font-weight: 600;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.349);
  -webkit-text-fill-color: transparent;
  z-index: 1 !important;
}

.about-card {
  font-size: 1.5em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 1rem;
  border-radius: 0;
  color: #d3d3d3;
}

.bl {
  border-left: 2px solid rgba(255, 255, 255);
}

.about-image {
  background-image: url("/assets/img/self-2.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 35rem;
  height: 35rem;
}
</style>
