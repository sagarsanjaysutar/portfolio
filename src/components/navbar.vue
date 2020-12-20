<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <span class="navbar-brand m-3" style="font-size: 1.5em"><a> &lt;/coder&gt;</a></span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-id" aria-controls="navbar-collapse-id" aria-expanded="false" style="border: 0">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-collapse-id">
      <ul class="navbar-nav w-100">
        <div class="nav-centered w-75">
          <li class="nav-item">
            <a class="nav-link active" onclick="$('.s1').animatescroll();">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="$('.s2').animatescroll();">Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="$('.s6').animatescroll();">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="$('.s4').animatescroll();">Contact</a>
          </li>
        </div>
        <div class="w-25 version">
          <div class="dropdown">
            <button class="btn dropdown-toggle btn-outline-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">v3</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="min-width: 7rem">
              <a class="dropdown-item" href="v1.html">v1</a>
              <a class="dropdown-item" href="v2.html">v2</a>
              <a class="dropdown-item bg-secondary" href="v3.html">v3</a>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: "navbar",
};
</script>

<style></style>
