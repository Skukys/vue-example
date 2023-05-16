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
            <h2 class="title">Регистрация</h2>
            <div class="title-bd-register"></div>
          </div>
          <div style="color: red" v-if="validationError">
            {{error}}
          </div>
          <input v-model="formData.first_name" type="text" class="base-input" placeholder="Имя...">
          <input v-model="formData.last_name" type="text" class="base-input" placeholder="Фамлия...">
          <input v-model="formData.document_number" type="text" class="base-input" placeholder="Номер документа...">
          <input v-model="formData.phone" type="text" class="base-input" placeholder="Телефон...">
          <input v-model="formData.password" type="text" class="base-input" placeholder="Пароль...">
          <input v-model="formData.password_confirmation" type="text" class="base-input" placeholder="Повтор пароля...">
          <button @click="register" style="text-align: center" class="form-register__btn btn">Регистрация</button>
          <div class="form-register__buttons" style="display: flex; justify-content: space-around">
            <router-link to="/" class="go-back" style="text-align:left; font-size: 20px;">На главную</router-link>
            <router-link to="/login" class="go-back" style="text-align:left; font-size: 20px;">Вход</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      validationError: false,
      error: '',
      formData: {
        first_name: '',
        last_name: '',
        phone: '',
        password: '',
        document_number: '',
        password_confirmation: '',
      },
      busket: [
        {
          count: 1,
          info: {

          }
        }
      ]
    }
  },
  watch: {
    // 'formData.first_name': function (value) {
    // }
  },
  methods: {
    async register(){
      this.validationError = false
      if(this.formData.password === this.formData.password_confirmation) {
        let res = await fetch('http://flights/routes/register.php', {
          method: 'POST',
          body: JSON.stringify(this.formData)
        })

        let json = await res.json()
        if(res.ok) this.$router.push('/login')
        else {
          this.validationError = true
          this.error = 'Document number - bad length'
        }
      } else {
        this.validationError = true
        this.error = 'password not confirmed'
      }
    }
  }
}
</script>

<style scoped>

</style>