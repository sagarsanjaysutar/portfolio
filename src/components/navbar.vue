<template>
  <b-navbar toggleable="lg" type="dark" style="background-color:transparent;">
    <b-navbar-brand href="#">&lt;Dev&gt;</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="w-100 d-flex " style="justify-content:center;">
        <b-nav-item href="#home">Home</b-nav-item>
        <b-nav-item href="#work">Work</b-nav-item>
        <b-nav-item href="#about">About</b-nav-item>
        <b-nav-item href="#contact">Contact</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="v4" right>
          <b-dropdown-item><a href="../pages/v1.html">v1</a></b-dropdown-item>
          <b-dropdown-item><a href="../pages/v2.html">v2</a></b-dropdown-item>
          <b-dropdown-item><a href="../pages/v3.html">v3</a></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
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
