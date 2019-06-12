<template lang="pug">
  section.mt3.col-12
    div.container.p2.bg-silver
      h1 {{ title }} Hackathons
      ul
        li(v-for="hackathon in hackathons").h3 {{ hackathon.date }}, 
          a(:href="hackathon.link") {{ hackathon.loc }}
</template>

<script>
export default {
  props: ["listType", "hackathons"],
  computed: {
    hackathons() {
      return hackathonsList;
    }
  }
};
</script>
