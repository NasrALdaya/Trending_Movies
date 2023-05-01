<template>
  <div class="movies-list">
    <div class="container">
      <h2 class="title">Movies List</h2>

      <div class="movies-wrap">
        <Movie
          v-for="(movie, index) in paginatedItems"
          :key="index"
          :movie="movie"
        />
      </div>
      <div class="pagination-controlers">
        <button @click="previousPage" class="pre">Previous</button>
        <button
          v-for="pageNumber in pageCount"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
          class="page"
        >
          {{ pageNumber }}
        </button>
        <button @click="nextPage" class="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "./MovieItem.vue";

export default {
  name: "MoviesList",
  data() {
    return {
      currentPage: 1,
      // the number of shown movies per page
      itemsPerPage: 9,
    };
  },
  components: {
    Movie,
  },
  props: ["moviesList"],
  methods: {
    // pagination controlers
    // methods that update the currentPage property
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
  },
  computed: {
    // calculates the start index of the current page and returns a subset of items based on the current page and the number of items per page
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.moviesList.slice(startIndex, startIndex + this.itemsPerPage);
    },
    pageCount() {
      return Math.ceil(this.moviesList.length / this.itemsPerPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.movies-list {
  margin-bottom: 100px;

  .title {
    margin-bottom: 30px;
    text-transform: capitalize;
  }

  .movies-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 15px;
    margin-bottom: 35px;
  }

  .pagination-controlers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
      border: none;
      outline: none;
      background: transparent;
      border: 1px solid var(--text-clr);
      color: var(--text-clr);
      padding: 10px 15px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 6px;
      transition: var(--transition);

      &:hover {
        background: var(--bg-02);
      }
    }
  }
}
</style>
