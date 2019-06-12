<template lang="pug">
  div.vh100.flex.flex-column.align-items-center
    TheHeader
    HackathonsList
    TheFooter.flex-grow.flex.align-items-end.pb2
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import HackathonsList from "./HackathonsList.vue";

export default {
  components: {
    TheHeader,
    HackathonsList,
    TheFooter
  }
};
</script>
