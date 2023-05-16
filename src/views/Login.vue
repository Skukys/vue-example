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
          <input type="text" v-model="formData.phone" class="base-input" placeholder="Телефон">
          <input type="text" v-model="formData.password" class="base-input" placeholder="Пароль">
          <button @click="login" style="text-align: center" class="form-register__btn btn">Вход</button>
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
  name: "Login",
  data(){
    return {
      formData: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    async login(){
      let res = await fetch('http://flights/routes/login.php', {
        method: 'POST',
        body: JSON.stringify(this.formData)
      })

      let json = await res.json()

      if(res.ok) {
        localStorage.setItem('user', JSON.stringify(json.userData))
        this.$router.push('/personal')
      }
    }
  }
}
</script>

<style scoped>

</style>