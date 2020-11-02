<template>
  <div>
    <Title></Title>
    <Subtitle></Subtitle>
    <PrimaryButton></PrimaryButton>
  </div>
</template>

<script>
import Title from "./title.vue";
import Subtitle from "./HomeSubtitle.vue";
import PrimaryButton from "./primarybutton.vue";

export default {
  components: {
    Title,
    Subtitle,
    PrimaryButton
  }
};
</script>

<style scoped>
div {
  position: absolute;
  width: 1440px;
  height: 816px;
  left: 0px;
  top: 64px;

  background-color: #f2efdf;
}
</style>
