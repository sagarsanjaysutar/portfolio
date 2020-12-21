<template>
  <b-navbar toggleable="lg" type="dark" style="background-color:transparent;">
    <b-navbar-brand href="#">&lt;Dev&gt;</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="w-100 d-flex " style="justify-content:center;">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Work</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="V3" right>
          <b-dropdown-item href="#">v1</b-dropdown-item>
          <b-dropdown-item href="#">v2</b-dropdown-item>
          <b-dropdown-item href="#">v3</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  // mounted() {
  //   window.onscroll = function() {
  //     document.querySelector(".navbar").classList.add("bg-light");
  //     document.querySelector(".navbar").classList.add("navbar-dark");
  //   };
  // },
};
</script>

<style>
.short-hr {
  background-color: white;
  width: 10%;
}

.typed-cursor {
  opacity: 0;
}

.nav-item {
  padding-left: 20px;
  font-size: 1em;
}
</style>
