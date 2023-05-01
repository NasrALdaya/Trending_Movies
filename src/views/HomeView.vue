<template>
  <div class="home">
    <div class="hero">
      <h1>
        Search in a list of the most famous films that were shown in the recent
        period.
      </h1>
    </div>
    <!-- when  -->
    <Search @search="handleSearch" />
    <!-- binding the filtered movie list to moviesList component -->
    <MoviesList :moviesList="filteredMovies" />
    <!-- binding the statistics computed propertie -->
    <Statistics :statistics="statistics" />
  </div>
</template>

<script>
// the searchBar, MoviesList, and Statistics each one in component
import Search from "../components/SerachBar.vue";
import MoviesList from "../components/movies_list/MoviesList.vue";
import Statistics from "../components/statistics/StatisticsMovies.vue";

// using axios to fetch the data
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      // API URL
      url: "https://api.themoviedb.org/3/trending/movie/week?api_key=2da591a8c1603b998675aa4b7b2fe277",
      moviesList: [],
      searchInput: "",
    };
  },
  mounted() {
    axios
      .get(this.url)
      .then((response) => {
        // save the movies data in moviesList propertie
        this.moviesList = response.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Search,
    MoviesList,
    Statistics,
  },
  methods: {
    // this method run when "searsh" emit, save the search input in searchInput propertie
    handleSearch(search) {
      this.searchInput = search;
    },
  },
  computed: {
    // filter the moviesList based on searchInput
    filteredMovies() {
      return this.moviesList.filter((movie) => {
        return movie.title
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
    // get the number of titles with vote_average over 7 in the list
    voteAverageOver7() {
      const filteredVotes = this.moviesList.filter(
        (movie) => movie.vote_average > 7
      );
      return filteredVotes.length;
    },
    // get the number of titles with vote_average less than 5 in the list
    voteAverageLessThan5() {
      const filteredVotes = this.moviesList.filter(
        (movie) => movie.vote_average < 5
      );
      return filteredVotes.length;
    },
    // get the total votes count of all movies in the list
    totalVotes() {
      let result;
      const total = this.moviesList.reduce((pre, curr) => {
        return pre + curr.vote_count;
      }, 0);

      // if the total is larger than 1000, replace the fractional part of the number with "K" or "M"
      if (total >= 1000000) {
        result = (total / 1000000).toFixed(1) + "M";
      } else if (total >= 1000) {
        result = (total / 1000).toFixed(1) + "k";
      } else {
        result = total.toString();
      }

      return result;
    },
    // get the percent of Action titles of all titles in the list
    percentageOfActionMovies() {
      const numberOfMovies = this.moviesList.length;
      const actionMovies = this.moviesList.filter((movie) =>
        movie.genre_ids.includes(28)
      ).length;
      return (actionMovies / numberOfMovies) * 100 + "%";
    },
    // save the computed properties for the statistics then binding it to statistics component
    statistics() {
      return [
        {
          title: "Titles over 7",
          value: this.voteAverageOver7,
        },
        {
          title: "Titles less than 5",
          value: this.voteAverageLessThan5,
        },
        {
          title: "Total votes count",
          value: this.totalVotes,
        },
        {
          title: "Action titles",
          value: this.percentageOfActionMovies,
        },
      ];
    },
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
