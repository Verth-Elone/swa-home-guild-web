<template>
  <div id="footer">
    <p class="footer-p">{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
  props: {
    copyright: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: calc(98%);
  margin: 1em;
  text-align: center;
}

.footer-p {
  display: inline-block;
  vertical-align: middle;
  vertical-align: text-bottom;
  font-size: calc(1em + 0.5vw);
}
</style>