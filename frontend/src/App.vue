<template>
  <TitleComponent title="&lt;HOME&gt; - Mirage-Raceway [A]" />
  <div id="app">
    <div id="bg"></div>
    <HelloWorld msg="Web is coming soon!" />
    <FooterBlock copyright="© Eclipsion 2022. All rights reserved." />
  </div>
</template>

<script>
import TitleComponent from "./components/TitleComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import FooterBlock from "./components/FooterBlock.vue";

export default {
  name: "App",
  components: {
    TitleComponent,
    HelloWorld,
    FooterBlock,
  },
};
</script>

<style>
* {
  border: 0px;
  margin: 0px;
  padding: 0px;
}

html {
  height: 100%;
}

body {
  background-color: black;
}

#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#bg {
  position: fixed;
  top: calc(-10vh - 5vw);
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background-image: linear-gradient(
      rgba(124, 77, 2, 33%),
      rgba(22, 13, 0, 66%),
      rgba(0, 0, 0, 100%)
    ),
    linear-gradient(transparent, rgba(0, 0, 0, 66%), rgba(0, 0, 0, 100%)),
    url("./assets/mascot.png");
  background-repeat: no-repeat;
  background-size: 140vw;
  background-position: center center;
  filter: blur(0.2vw);
}
</style>
