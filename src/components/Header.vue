<template>
  <header class="header">
    <div class="header__content flex">
      <div class="header__logo"><img src="@/assets/img/logo.png" alt="Logo"></div>
      <nav class="header__nav">
        <a href="#" class="header__nav-link">Акции</a>
        <a href="#" class="header__nav-link">Поиск</a>
        <a href="#" class="header__nav-link">Регистрация на рейс</a>
        <router-link to="/login" class="header__nav-link">Личный кабинет</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>