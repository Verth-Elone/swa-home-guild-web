<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;

  margin: 0;
  width: 90%;
  top: calc(45% - 5vh + 5vw);
  left: 5%;
  padding: auto;
  border-top: 5px solid rgba(255, 194, 12, 50%);
  border-bottom: 5px solid rgba(255, 194, 12, 50%);
}

h1 {
  font-size: 10vw;
  color: rgb(255, 194, 12);
  font-family: "Brush Script MT", cursive;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -px 0 #000;
}
</style>
