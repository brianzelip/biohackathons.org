<template lang="pug">
  section.vh100
    ol
      li(v-for="hackathon in hackathons") {{ hackathon.date }}
</template>

<script>
import hackathonsList from "../data/upcomingHackathons.yml";

export default {
  computed: {
    hackathons() {
      return hackathonsList;
    }
  }
};
</script>
