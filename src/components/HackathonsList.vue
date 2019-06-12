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
    title() {
      return `${this.listType.slice(0, 1).toUpperCase()}${this.listType.slice(
        1
      )}`;
    }
  }
};
</script>
