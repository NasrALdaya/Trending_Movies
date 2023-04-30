<template>
  <div class="search ptb">
    <div class="container">
      <form>
        <div class="input">
          <input type="text" placeholder="Movie title" v-model="search" />
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
        </div>
        <button class="btn" @click.prevent="">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;

      .input {
        flex: 3;
      }

      button {
        flex: 1;
      }
    }

    .input {
      position: relative;
      width: 100%;

      input {
        border: none;
        outline: none;
        background-color: var(--bg-02);
        width: 100%;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid transparent;
        color: var(--text-clr);
        font-size: 16px;

        &:focus {
          outline: none;
          border-color: var(--main-clr);
        }
      }

      .icon {
        position: absolute;
        padding: 15px;
        background: var(--bg-02);
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }

    button {
      display: block;
      padding: 15px;
      width: 100%;
      border: none;
      outline: none;
      cursor: pointer;
      background: var(--main-clr);
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      transition: var(--transition);

      &:hover {
        background: var(--second-clr);
      }
    }
  }
}
</style>
