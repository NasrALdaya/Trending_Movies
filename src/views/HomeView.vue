<template>
  <div class="home">
    <div class="hero">
      <h1>
        Search in a list of the most famous films that were shown in the recent
        period.
      </h1>
    </div>
    <Search />
    <MoviesList />
    <Statistics />
  </div>
</template>

<script>
import Search from "../components/SerachBar.vue";
import MoviesList from "../components/movies_list/MoviesList.vue";
import Statistics from "../components/statistics/StatisticsMovies.vue";

export default {
  name: "HomeView",
  components: {
    Search,
    MoviesList,
    Statistics,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .hero {
    padding: 80px 15px 0;
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      font-size: 14px;
    }

    h1 {
      width: 100%;
      max-width: 600px;
      line-height: 1.6;
    }
  }
}
</style>
