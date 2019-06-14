<template lang="pug">
  div.vh100.flex.flex-column.align-items-center
    TheHeader
    HackathonsList(listType="upcoming" :hackathons="upcomingHackathons")#events
    HackathonsList(listType="past" :hackathons="pastHackathons")
    TheFooter.flex-grow.flex.align-items-end.pb2
</template>

<script>
import upcomingHackathonsData from "../data/upcomingHackathons.yml";
import pastHackathonsData from "../data/pastHackathons.yml";

import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import HackathonsList from "./HackathonsList.vue";

export default {
  components: {
    TheHeader,
    HackathonsList,
    TheFooter
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
