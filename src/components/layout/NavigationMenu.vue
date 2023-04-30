<template>
  <header class="header">
    <div class="container">
      <nav>
        <h2 class="branding">
          <router-link :to="{ name: 'home' }">Trending Movies</router-link>
        </h2>
        <p>Vue.js Task, By: <span>Nasr Aldaya</span></p>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  height: 100px;
  background-color: var(--bg-02);
  display: flex;
  align-items: center;

  border-bottom: 2px solid var(--main-clr);

  nav {
    h2 {
      margin-bottom: 10px;

      a {
        transition: var(--transition);

        &:hover {
          color: var(--main-clr);
        }
      }
    }

    p {
      span {
        color: var(--main-clr);
      }
    }
  }
}
</style>
