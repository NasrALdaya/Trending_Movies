<template>
  <div class="movie">
    <div class="image">
      <img :src="getMoviePoster(movie)" :alt="movie.title" />
    </div>
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <p class="date">
        Date: <time>{{ movie.release_date }}</time>
      </p>
      <p class="vote">Vote Average: {{ voteFixed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
  methods: {
    // joining the image url with poster path to get the movie poster url
    getMoviePoster(movie) {
      return (
        "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path
      );
    },
  },
  computed: {
    voteFixed() {
      return this.movie.vote_average.toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  background: var(--bg-02);
  border-radius: 6px;
  padding: 15px;
  border: 1px solid transparent;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    border-color: var(--main-clr);

    .image {
      transform: rotateZ(1deg) scale(1.01);
    }

    .title {
      color: var(--main-clr);
    }
  }

  .image {
    width: 120px;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    transition: var(--transition);
    flex: 1;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    flex: 2;

    .title {
      font-size: 20px;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 10px;
      transition: var(--transition);
    }

    .date {
      margin-bottom: 5px;
    }

    .date,
    .vote {
      color: var(--text-alt);
    }
  }
}
</style>
