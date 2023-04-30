<template>
  <div class="statistics">
    <div class="container">
      <h2 class="title">Statistics</h2>

      <div class="statistics-wrap">
        <StatItem
          v-for="(stat, index) in sampleStats"
          :key="index"
          :statData="stat"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StatItem from "./StatisticsItem.vue";

export default {
  name: "StatisticsMovies",
  data() {
    return {
      sampleStats: [
        {
          title: "Title over 7",
          value: "25",
        },
        {
          title: "Title less than 6",
          value: "10",
        },
        {
          title: "Total votes count",
          value: "30M",
        },
        {
          title: "Action titles",
          value: "25%",
        },
      ],
    };
  },
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
