<template>
  <div class="chart">
    <h3><b>Dashboard:</b></h3>
    <div class="md-layout-item md-size-50">
      <chart></chart>
    </div>
    <div class="md-layout-item md-size-50">
      <radar></radar>
    </div>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
import database from "../firebase.js";
import Radar from "./RadarSkillset.js";
export default {
  components: {
    Chart,
    Radar
  }
};
</script>

<style></style>
