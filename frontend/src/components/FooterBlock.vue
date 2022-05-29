<template>
  <div id="footer">
    <p class="footer-p">© Eclipsion 2022. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
  props: {},
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
  top: calc(100%);
  margin: 5px;
  padding: auto;
  text-align: center;
}

.footer-p {
  display: inline-block;
  vertical-align: middle;
  vertical-align: text-bottom;
}
</style>