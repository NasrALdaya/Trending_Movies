<template>
  <div class="stat-item">
    <h3 class="title">{{ statData.title }}</h3>
    <span class="value">{{ statData.value }}</span>
  </div>
</template>

<script>
export default {
  name: "StatsItem",
  props: ["statData"],
};
</script>

<style lang="scss" scoped>
.stat-item {
  padding: 25px;
  border: 1px solid var(--text-alt);
  border-radius: 6px;
  color: var(--text-alt);

  .title {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .value {
    display: block;
    font-size: 55px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
