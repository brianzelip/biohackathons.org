<template lang="pug">
  div.vh100.flex.flex-column.align-items-center
    TheHeader
    router-view
    TheFooter
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
