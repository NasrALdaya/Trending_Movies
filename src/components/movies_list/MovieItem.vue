<template>
  <div class="movie">
    <div class="image">
      <img
        :src="require(`../../assets/imgs/${movie.imagePath}.jpg`)"
        :alt="movie.imagePath"
      />
    </div>
    <div class="info">
      <h3 class="title">{{ movie.title }}</h3>
      <p class="date">
        <time>{{ movie.date }}</time>
      </p>
      <p class="vote">Rate: {{ movie.voteAverage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: ["movie"],
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
    border-radius: 6px;
    overflow: hidden;
    transition: var(--transition);

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    .title {
      font-size: 22px;
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
