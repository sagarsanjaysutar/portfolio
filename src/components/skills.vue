<template>
  <div class="skill-container">
    <div class="container" style="z-index:2 !important; position: relative">
      <div class="row" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-12 section-heading">Profound domains</div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6" data-aos="fade-up" data-aos-duration="1000" v-for="(skill, index) in skills" :key="index">
          <div class="card skill-card" :style="{ backgroundImage: 'url(' + skill.background + ')' }">
            <div class="card-body">
              <h4 class="card-title">{{ skill.name }}</h4>
              <div class="card-subtitle ">
                {{ skill.desc }}
              </div>
              <div class="card-actions">
                <div class="skill-logo" data-toggle="tooltip" data-placement="top" v-for="(icon, index) in skill.icons" :key="index" :title="icon.name">
                  <img class="img-fluid lazy" :src="icon.logoUrl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-if="!isMobile()" class="skill-background-text">SKILLS</span>
  </div>
</template>

<script>
export default {
  name: "skills",
  data: () => {
    return {
      skills: [
        {
          name: "Web Development",
          desc: "I've worked on mutiple project based on the MEVN stack i.e Mongo, Express, Vue and Node JS \
          along side with Vuetify & Bootstrap. Infact this website is made using Vuejs.",
          background: "https://raw.githubusercontent.com/sagarsanjaysutar/portfolio-vue/master/src/assets/img/bg/random.webp",
          icons: [
            {
              name: "Mongo DB",
              logoUrl: "https://www.mongodb.com/assets/images/global/favicon.ico",
            },

            {
              name: "Express",
              logoUrl: "https://expressjs.com/images/favicon.png",
            },
            {
              name: "Vue",
              logoUrl: "https://vuejs.org/images/icons/apple-icon-57x57.png",
            },
            {
              name: "Node JS",
              logoUrl: "https://nodejs.org/static/images/logo.svg",
            },
          ],
        },
        {
          name: "Mobile Development",
          desc: "I've also spent good amount of time on android and made couple of apps too.",
          background: "https://ionicframework.com/img/getting-started/ionic-native-card.png",
          icons: [
            {
              name: "Android",
              logoUrl: "https://www.android.com/static/images/fav/favicon.ico",
            },
          ],
        },
        {
          name: "Competetive Programming",
          desc: "Competetive Programming has always intrigued me and I've tried my very best on Hacker Rank and Project euler.\
            I've also won couple of competitions in college too.",
          background: "https://ionicframework.com/img/getting-started/theming-card.png",
          icons: [
            {
              name: "Project Euler",
              logoUrl: "https://projecteuler.net/favicon.ico",
            },
            {
              name: "Hacker Rank",
              logoUrl: "https://hrcdn.net/community-frontend/assets/favicon-ddc852f75a.png",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.skill-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.skill-background-text {
  writing-mode: vertical-rl;
  text-orientation: sideways-right;
  position: absolute;
  text-align: right;
  height: 100%;
  width: 100%;
  top: 0rem;
  right: 1rem;
  font-size: 12rem;
  font-weight: 600;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.349);
  -webkit-text-fill-color: transparent;
  z-index: 1 !important;
}

.skill-card {
  min-height: 18rem;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100px;
  margin-bottom: 2rem;
  display: flex;
  position: relative;
  background-color: #383838;
}

.skill-card .card-subtitle {
  max-width: 25rem;
}

.skill-card .card-body .card-actions {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.skill-logo {
  background-color: black;
  margin-left: 10px;
  border-radius: 50px;
  border: 1px solid gray;
  height: 3rem;
  width: 3rem;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill-logo img {
  width: 50%;
  height: 50%;
}
</style>
