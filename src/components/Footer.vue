<template>
  <footer class="footer">
    <div class="footer__content flex">
      <nav class="header__nav">
        <a href="#" class="header__nav-link">Акции</a>
        <a href="#" class="header__nav-link">Поиск</a>
        <a href="#" class="header__nav-link">Регистрация на рейс</a>
        <router-link to="/login" class="header__nav-link">Личный кабинет</router-link>
      </nav>
      <div class="footer__tel">
        8 (800) 100-10-10
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>