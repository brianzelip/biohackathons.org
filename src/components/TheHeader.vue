<template lang="pug">
  header.vh100.col-12
    h1 {{ siteName }}
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
header {
  background-image: url("../img/banner2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
