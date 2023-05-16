<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Добавление Аэропорта</h1>
      <form @submit.prevent="create" class="flex column">
        <input v-model="formData.code" type="text" class="input-create" placeholder="Code">
        <input v-model="formData.city" type="text" class="input-create" placeholder="City">
        <input v-model="formData.airport" type="text" class="input-create" placeholder="Airport">
        <input @change="changeFile" type="file" class="input-create" placeholder="Image">
        <button class="button-create">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createAirport",
  data(){
    return {
      formData: {
        code: '',
        city: '',
        airport: '',
        image: '',
      }
    }
  },
  methods: {
    async create() {
      let formData = new FormData()

      formData.append('city', this.formData.city)
      formData.append('airport', this.formData.airport)
      formData.append('code', this.formData.code)
      formData.append('image', this.formData.image)

      let res = await fetch('http://flights/routes/createAirport.php', {
        method: 'POST',
        headers: {},
        body: formData
      })

      if(res.ok) this.$router.push('/')

    },
    changeFile(e){
      let file = e.target.files
      this.formData.image = file[0]
    }
  },
}
</script>

<style scoped>

</style>