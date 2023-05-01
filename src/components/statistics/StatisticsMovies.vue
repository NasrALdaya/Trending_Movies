<template>
  <div class="statistics">
    <div class="container">
      <h2 class="title">Statistics</h2>

      <div class="statistics-wrap">
        <StatItem
          v-for="(stat, index) in statistics"
          :key="index"
          :statData="stat"
        />
      </div>
    </div>
  </div>
</template>

<script>
// each statistic is in a separate component
import StatItem from "./StatisticsItem.vue";

export default {
  name: "StatisticsMovies",
  props: ["statistics"],
  components: {
    StatItem,
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  .title {
    margin-bottom: 35px;
  }

  .statistics-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 50px;
  }
}
</style>
