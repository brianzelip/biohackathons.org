<template lang="pug">
  header.col-12
    section.banner.col-12
    nav.bg-black
      div.flex.justify-between.align-items-center.container
        h1.m0.h2.regular
          a(href="/").hover-decoration-none.white {{ siteName }}
        ul.list-reset.flex.mb0.white
          li
            a(href="#").btn.regular Events
          li
            a(href="#").btn.regular Products
          li
            a(href="#").btn.regular About
          li
            a(href="#").btn.regular Resources
          li
            a(href="#").btn.regular Contact
          li
            a(href="#").btn.regular Join the mailing list!
</template>

<script>
export default {
  data() {
    return {
      siteName: "BioHackathons"
    };
  },
  mounted() {
    // fixed header on scroll via https://www.w3schools.com/howto/howto_js_sticky_header.asp
    window.onscroll = function() {
      fixedNavScroll();
    };

    const nav = document.querySelector("nav");
    const sticky = nav.offsetTop;

    function fixedNavScroll() {
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }
  }
};
</script>

<style scoped>
.banner {
  background-image: none;
  background-size: unset;
  background-repeat: unset;
  height: 0;
}
@media (min-width: 40em) {
  .banner {
    background-image: url("../img/banner2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
  }
}
@media (min-width: 52em) {
  .banner {
    height: 33vh;
  }
}
@media (min-width: 64em) {
  .banner {
    height: 50vh;
  }
}

li {
  margin-right: 0.5rem;
}
li:last-child {
  margin-right: 0;
}

.btn {
  padding: 1rem;
}

.btn:hover {
  background-color: hsla(0, 0%, 100%, 0.3);
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
