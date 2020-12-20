<template>
  <div class="container project-container">
    <div class="row" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-12 section-heading">My Work</div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4" v-for="project in projects" :key="project.id">
        <div class="project-card">
          <div class="project-img lazy " :style="{ backgroundImage: `url(${project.coverImage})` }">
            <div class="project-content">
              <h4 class="project-name h4">{{ project.name }}</h4>
              <h5 class="project-desc h5">{{ project.desc }}</h5>
              <p class="btn btn-sm btn-outline-light fw-lighter">View project <i class="ml-1 fas fa-arrow-right"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data: () => {
    return {
      projects: [
        {
          id: "p1",
          name: "Library",
          desc: "A Library Web App made using MEVN stack.",
          link: "",
          type: "Web app",
          techUsed: ["MEVN"],
          coverImage: "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%202.png",
          previewImages: [],
        },
        {
          id: "p2",
          name: "Parking",
          desc: "A Parking Web App with a web app and physical vehicle detecting module.",
          link: "",
          type: "Web app",
          techUsed: ["Python", "MEVN"],
          coverImage: "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Parking/Parking%202.webp",
          previewImages: [],
        },
        {
          id: "p3",
          name: "Droid Stack",
          desc: "An android app with features like fragments, recycler view,etc.",
          link: "",
          type: "Android app",
          techUsed: ["Android"],
          coverImage: "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%201.jpg",
          previewImages: [],
        },
      ],
    };
  },
};
</script>

<style>
.project-container {
  height: 100vh;
  width: 100%;
  /* background: linear-gradient(to bottom, var(--trans-primary) 0%, var(--dark) 93%, rgb(0, 0, 0) 100%); */
}

.project-card {
  width: 20rem;
  height: 25rem;
  background-color: black;
  overflow-x: hidden;
}
.project-img {
  box-shadow: 0px -200px 100px rgb(0, 0, 0, 0.85) inset;
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
}

.project-content {
  width: 100%;
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  padding: 1rem;
}

.project-name {
  font-weight: 600;
}
.project-desc {
  color: #ffffffbd;
  font-size: 0.9rem;
  line-height: 1.2;
  word-wrap: break-word;
}
</style>
