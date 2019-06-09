<template>
  <div class="vh100 flex flex-column align-items-center">
    <h1>{{ siteName }}</h1>
    <footer class="flex-grow flex align-items-end pb2">
      <a href="https://www.zelip.me">by bzelip</a>&nbsp;|&nbsp;
      <a href="https://github.com/brianzelip/biohackathons.org">Source code</a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: "BioHackathons.org"
    };
  }
};
</script>
