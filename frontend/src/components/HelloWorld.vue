<template>
  <div class="discord">
    <a href="https://discord.gg/McTHNX3WBQ">
      <img
        id="discord-logo"
        src="../assets/discord-icon.svg"
        alt="HTML tutorial"
      />
    </a>
  </div>
  <div class="coming-soon">
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
.discord {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  padding: auto;
  top: calc(20% - 3.5vw);
}

#discord-logo {
  width: calc(10vw + 10vh - 3%);
  border: 0.5vh solid rgb(255, 194, 12);
  border-radius: 20%;
  padding: 0.5vh;
}

.coming-soon {
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
  border-top: 0.5vh solid rgba(255, 194, 12, 50%);
  border-bottom: 0.5vh solid rgba(255, 194, 12, 50%);
}

h1 {
  font-size: 10vw;
  color: rgb(255, 194, 12);
  font-family: "Brush Script MT", cursive;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -px 0 #000;
}
</style>
