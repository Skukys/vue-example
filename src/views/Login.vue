<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__content flex">
        <div class="header__logo"><img src="@/assets/img/logo.png" alt="Logo"></div>
      </div>
    </header>
    <div class="main">
      <div class="main-bg"><img src="@/assets/img/bg.jpg" alt="Bg"></div>
      <div class="main__content form-content">
        <div class="form-register flex column">
          <div class="how-work__title title-block register">
            <h2 class="title">Вход</h2>
            <div class="title-bd-register"></div>
          </div>
          <input type="text" class="base-input" placeholder="Телефон">
          <input type="text" class="base-input" placeholder="Пароль">
          <router-link to="/personal" style="text-align: center" class="form-register__btn btn">Вход</router-link>
          <div class="form-register__buttons" style="display: flex; justify-content: space-around">
            <router-link to="/" class="go-back" style="text-align:left; font-size: 20px;">На главную</router-link>
            <router-link to="/register" class="go-back" style="text-align:left; font-size: 20px;">Регистрация</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>