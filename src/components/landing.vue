<template>
  <div class="intro-container ">
    <div class="container h-100">
      <div class="row h-100" style="z-index:2 !important; position: relative">
        <div class="col-lg-6 col-12 intro-row-desc  ">
          <span>
            <h3 class="name" data-aos="fade-left" data-aos-duration="1500">Hi, Sagar <br />this side! <br /></h3>
            <span class="pre-text" style="color: green"> >> </span>
            <span class="skill">A full stack developer</span>
          </span>
        </div>
        <div class="col-lg-6 col-12 intro-row-img ">
          <div class="img-fluid intro-self"></div>
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
  background-image: url("../assets/img/Sagar4.jpg");
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
  /* -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white; */
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
}
</style>
