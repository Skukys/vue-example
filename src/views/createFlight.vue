<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Добавление Полёта</h1>
      <form @submit.prevent="create" class="flex column">
        Airport from
        <select class="input-create" v-model.number="formData.airport_from">
          <option :value="element.id" v-for="element in airports">{{ element.city }}</option>
        </select>
        Airport to
        <select class="input-create" v-model.number="formData.airport_to">
          <option :value="element.id" v-for="element in airports">{{ element.city }}</option>
        </select>
        <input type="date" class="input-create" v-model="formData.date">
        <input placeholder="Code" type="text" class="input-create" v-model="formData.code">
        <input placeholder="Cost" type="text" class="input-create" v-model.number="formData.cost">
        <input placeholder="Duration" type="text" class="input-create" v-model.number="formData.duration">
        <input placeholder="Name" type="text" class="input-create" v-model="formData.name_airplane">
        <button class="button-create">Создать</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "createFlight",
  data() {
    return {
      airports: [],
      formData: {
        airport_from: null,
        airport_to: null,
        date: null,
        code: null,
        cost: null,
        duration: null,
        name_airplane: null,
      },
    }
  },
  methods: {
    async create() {
      let res = await fetch('http://flights/routes/createFlight.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(this.formData)
      })

      console.log(res)
      if(res.ok) this.$router.push('/')
    },
  },
  async mounted() {
    let res = await fetch('http://flights/routes/getAirport.php', {method: 'GET'})
    let json = await res.json()
    this.airports = json.data
  }
}
</script>

<style scoped>

</style>