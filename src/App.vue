<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/layout/NavigationMenu.vue";
import Footer from "./components/layout/FooterVue.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
// font => [ poppins ]
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

// global style
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-clr: #01dbc6;
  --second-clr: #00bcaa;
  --pink-clr: #f48fb1;
  --bg-01: #251f1d;
  --bg-02: #4a4741;
  --text-clr: #e5e3df;
  --text-alt: #c5c5c5;

  --transition: 0.4s ease all;

  --shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.02), 0px 0px 8.9px rgba(0, 0, 0, 0.03),
    0px 0px 40px rgba(0, 0, 0, 0.05);
}

body {
  background-color: var(--bg-01);
  color: var(--text-clr);
}

a {
  color: var(--text-clr);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.ptb {
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
