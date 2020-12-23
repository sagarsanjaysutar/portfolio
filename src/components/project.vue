<template>
  <div class="project-container">
    <div class="container " style="z-index:2 !important; position: relative">
      <div class="row " data-aos="fade-up" data-aos-duration="1000">
        <div class="col-12 section-heading">My Work</div>
      </div>
      <div
        class="row mb-5 d-flex justify-content-center "
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="col-6 mb-5 " :style="{ order: index % 2 === 0 ? '1' : '2' }" v-if="!isMobile()">
          <!---Ternary operator to diplay the project details alernatively  -->
          <b-carousel id="carousel-1" :interval="3000">
            <b-carousel-slide v-for="image in project.previewImages" :key="image.id">
              <template #img>
                <img class="img-fluid  project-images" :src="image" />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="col-4 " :style="{ order: index % 2 !== 0 ? '1' : '2' }" v-if="!isMobile()">
          <div class="card project-details">
            <h5 class="card-title project-name">
              {{ project.name }}
            </h5>
            <h6 class="card-text h6 project-desc ">{{ project.type }} • {{ project.techUsed }}</h6>
            <p class="word-wrap">{{ project.desc }}</p>

            <div class="card-action mt-3">
              <b-button variant="light">View code</b-button>
            </div>
          </div>
        </div>

        <span v-else>
          <div class="col-12">
            <div class="project-mobile-card">
              <b-carousel id="carousel-1 " :interval="3000">
                <b-carousel-slide v-for="image in project.previewImages" :key="image.id">
                  <template #img>
                    <img class="project-mobile-img" :src="image" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
              <div class="project-mobile-content">
                <h4 class="project-mobile-name h4">{{ project.name }}</h4>
                <h5 class="project-mobile-desc h5">{{ project.desc }}</h5>
                <p class="btn btn-sm btn-outline-light mt-3">
                  View project <i class="ml-1 fas fa-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
    <span class="project-background-text">WORK </span>
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
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.project-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.project-background-text {
  writing-mode: vertical-rl;
  position: absolute;
  text-align: left;
  top: 10rem;
  left: 1rem;
  font-size: 12rem;
  font-weight: 600;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
  z-index: 1 !important;
}

/* Desktop card */
.project-details {
  max-width: 18rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  border: 0px;
}

.project-images {
  filter: grayscale(20%);
  border-radius: 0.8rem;
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

/* Mobile card */
.project-mobile-card {
  width: 20rem;
  height: 25rem;
  background-color: black;
  overflow-x: hidden;
  position: relative;
}
.project-mobile-img {
  height: 25rem;

  background-size: contain;
}
.project-mobile-content {
  width: 100%;
  height: 100%;
  box-shadow: 0px -200px 100px rgb(0, 0, 0, 0.85) inset;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: end;
  left: 0rem;
  bottom: 0rem;
  padding: 1rem;
}
.project-mobile-name {
  font-weight: 600;
}
.project-mobile-desc {
  color: #ffffffbd;
  font-size: 0.9rem;
  line-height: 1.2;
  word-wrap: break-word;
}
</style>
