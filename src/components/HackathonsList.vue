<template lang="pug">
  section.vh100
</template>

<script>
const fs = require("fs");
const path = require("path");
import yaml from "js-yaml";

export default {
  data() {
    return {
      eventList: {}
    };
  },
  created() {
    // console.log("component created!");
    // const data = yaml.safeLoad("../data/upcomingHackathons.yml");
    // console.log("data obj is:::::", data);
  },
  mounted() {
    const doc = fs.readFileSync(
      path.join(__dirname, "../data/upcomingHackathons.yml"),
      "UTF-8"
    );
  }
};
</script>
