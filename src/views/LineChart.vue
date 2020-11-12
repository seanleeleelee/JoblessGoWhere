<template>
  <div class="chart">
    <h3><b>Dashboard:</b></h3>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
import database from "../firebase.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
</style>