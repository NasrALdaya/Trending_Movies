<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">Created with love by: <span>Nasr Aldaya</span></p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 20px;
  background: var(--bg-02);
  border-top: 2px solid var(--main-clr);
  text-transform: capitalize;

  span {
    color: var(--main-clr);
  }
}
</style>
