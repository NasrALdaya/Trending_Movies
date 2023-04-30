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
      sampleMovies: [
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 0,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 1,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 2,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 3,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 4,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 5,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 6,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 7,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 8,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 9,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 10,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 11,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 12,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 13,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 14,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 15,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 16,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 17,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 18,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 19,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 20,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 21,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 22,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 23,
          imagePath: "cover-03",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 24,
          imagePath: "cover-01",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 25,
          imagePath: "cover-02",
        },
        {
          title: "Movie Title",
          date: "25-4-2023",
          voteAverage: 26,
          imagePath: "cover-03",
        },
      ],
      currentPage: 1,
      itemsPerPage: 9,
      modalActive: null,
    };
  },
  components: {
    Movie,
  },
  methods: {
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
        console.log("go");
        this.currentPage++;
      }
    },
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.sampleMovies.slice(
        startIndex,
        startIndex + this.itemsPerPage
      );
    },
    pageCount() {
      return Math.ceil(this.sampleMovies.length / this.itemsPerPage);
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
