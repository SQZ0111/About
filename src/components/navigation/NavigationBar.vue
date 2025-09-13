<template>
  <nav class="nav-bar">
    <h2 class="nav-heading">Saqib Bhatti🐉</h2>
    <div class="utils-bar">
        <v-icon class="icon" name="bi-search"/>
        <v-icon class="icon" name="gi-night-sleep"/>
    </div>
    <ul class="nav-items">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/projects">Projects</RouterLink></li>
      <li><RouterLink to="/teaching">Teaching</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-bar {
  background-color:#a000f0;
  height: auto;
  width: 100vw;
  display: grid;
  grid-template-areas: "heading heading utils"
             "pages pages pages";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
}

.utils-bar {
    justify-self: flex-end;
    margin: 30px;
    grid-area: utils;
    display: flex;
    gap: 50px;
}

.icon {
    scale: 1.5;
}

.icon:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.nav-heading {
    margin-left: 10px;
    color: #fcf3ff;
    grid-area: heading;

}
.nav-items {

    display: flex;
    gap: 10px;
    grid-area: pages;
    justify-content: center;
    list-style-type: none;
    align-items: center;

}
.nav-items > li {
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0cdff;
    color: #fcf3ff;
    border-radius: 15px;
}
.nav-items > li > a {
    text-decoration: none;
}
.nav-items > li:hover {
    background-color: #a000f0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
