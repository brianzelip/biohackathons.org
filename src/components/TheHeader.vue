<template lang="pug">
  header.col-12
    section.banner.col-12
    nav.bg-black
      div.container
        h1.m0.white {{ siteName }}
</template>

<script>
export default {
  data() {
    return {
      siteName: "BioHackathons"
    };
  }
};
</script>

<style scoped>
.banner {
  background-image: none;
  background-size: unset;
  background-repeat: unset;
  height: 0;
}
@media (min-width: 40em) {
  .banner {
    background-image: url("../img/banner2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
  }
}
@media (min-width: 52em) {
  .banner {
    height: 33vh;
  }
}
@media (min-width: 64em) {
  .banner {
    height: 50vh;
  }
}
</style>
