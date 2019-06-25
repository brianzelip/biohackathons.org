<template lang="pug">
  section
    HackathonsList(listType="upcoming" :hackathons="upcomingHackathons")#events
    HackathonsList(listType="past" :hackathons="pastHackathons")
</template>

<script>
import upcomingHackathonsData from "../data/upcomingHackathons.yml";
import pastHackathonsData from "../data/pastHackathons.yml";

import HackathonsList from "./HackathonsList.vue";

export default {
  components: {
    HackathonsList
  },
  computed: {
    upcomingHackathons() {
      return upcomingHackathonsData;
    },
    pastHackathons() {
      return pastHackathonsData;
    }
  }
};
</script>
