<template>
  <div class="container project-container">
    <b-modal ref="detailModal" hide-footer hide-header centered size="lg">
      <div class="card project-details">
        <b-carousel id="carousel-1 " :interval="3000">
          <b-carousel-slide
            v-for="image in selectedProject.previewImages"
            :key="image.id"
            :img-src="image"
          >
          </b-carousel-slide>
        </b-carousel>
        <div class="card-body">
          <h5 class="card-title project-name">
            {{ selectedProject.name }}
          </h5>
          <h6 class="card-text h6 project-desc">
            {{ selectedProject.type }} • {{ selectedProject.techUsed }}
          </h6>

          {{ selectedProject.desc }}

          <div class="card-action mt-3">
            <b-button variant="light" @click="hideModal">View code</b-button>
          </div>
        </div>
      </div>
    </b-modal>
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
              <b-button
                @click="
                  setProjectDetail(project.id);
                  showModal();
                "
                variant="outline-light"
              >
                View project <i class="ml-1 fas fa-arrow-right"></i>
              </b-button>
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
      selectedProject: {},
      selectedDetails: false,
      showDetails: false,
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
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%201.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%202.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%203.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%204.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%205.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%206.jpg",
            "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/Work/Droid%20Stack/app%207.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.$refs["detailModal"].show();
    },
    hideModal() {
      this.$refs["detailModal"].hide();
    },
    setProjectDetail(id) {
      for (const project of this.projects) {
        if (project.id === id) {
          this.selectedProject = project;
          break;
        }
      }
    },
  },
};
</script>

<style>
.project-container {
  height: 100vh;
  width: 100%;
  /* background: linear-gradient(to bottom, var(--trans-primary) 0%, var(--dark) 93%, rgb(0, 0, 0) 100%); */
}

/* Modal */
.project-details {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #282828;
}
.project-details .card-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: absolute;
  left: 0;
  bottom: 0;
  box-shadow: 0px -200px 100px rgb(0, 0, 0, 0.9) inset;
}

.carousel-caption {
  bottom: 0;
  left: 0;
  height: 100% !important;
  width: 100% !important;
  padding: 0px;
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
