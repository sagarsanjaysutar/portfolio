<template>
  <div class="container project-container">
    <div class="row" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-12 section-heading">My Work</div>
    </div>
    <div class="row mb-5" v-for="(project, index) in projects" :key="project.id">
      <div class="col-12 col-lg-6" :style="{ order: index % 2 === 0 ? '1' : '2' }">
        <b-carousel id="carousel-1" :interval="3000">
          <b-carousel-slide v-for="image in project.previewImages" :key="image.id" :img-src="image">
          </b-carousel-slide>
        </b-carousel>
      </div>

      <div class="col-12 col-lg-6" :style="{ order: index % 2 !== 0 ? '1' : '2' }">
        <div class="card project-details">
          <h5 class="card-title project-name">
            {{ project.name }}
          </h5>
          <h6 class="card-text h6 project-desc">{{ project.type }} • {{ project.techUsed }}</h6>
          {{ project.desc }}
          <div class="card-action mt-3">
            <b-button variant="light" @click="hideModal">View code</b-button>
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
          link: "https://github.com/sagarsanjaysutar/library-vue",
          type: "Web app",
          techUsed: "MEVN",
          coverImage:
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%202.png",
          previewImages: [
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%201.png",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%202.png",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%203.png",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Library/Library%204.png",
          ],
        },
        {
          id: "p2",
          name: "Parking",
          desc: "A Parking Web App with a web app and physical vehicle detecting module.",
          link: "https://github.com/sagarsanjaysutar/SpotKar",
          type: "Web app",
          techUsed: "OpenCV",
          coverImage:
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Parking/Parking%202.webp",
          previewImages: [
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Parking/Parking%201.webp",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Parking/Parking%202.webp",
          ],
        },
        {
          id: "p3",
          name: "Droid Stack",
          desc: "An android app with features like fragments, recycler view,etc.",
          link: "",
          type: "Android app",
          techUsed: "Android",
          coverImage:
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%201.jpg",
          previewImages: [
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/Droid%201.png",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/Droid%202.png",
          ],
        },
      ],
    };
  },
};
</script>

<style>
.project-container {
  width: 100%;
  /* background: linear-gradient(to bottom, var(--trans-primary) 0%, var(--dark) 93%, rgb(0, 0, 0) 100%); */
}

/* Modal */
.project-details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #282828;
  border: 0px;
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
