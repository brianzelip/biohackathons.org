<template lang="pug">
  div.vh100.flex.flex-column.align-items-center
    TheHeader
    TheFooter.flex-grow.flex.align-items-end.pb2
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      siteName: "BioHackathons.org"
    };
  }
};
</script>
