<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Результат поиска</h1>
      <div class="title-bd"></div>
    </div>
    <!--    v-bind-->
    <!--    v-for-->
    <div class="search__content flex column">
      <router-link to="/" class="go-back" style="text-align:left; font-size: 24px;">Назад</router-link>
      <div class="search__content-title">Москва - Токио</div>
      <Card
          v-for="(element, id) in flightStore.searchFlights"
          :item="element"
          :back="true"
          :id="id"
          @click="route(element.id)"
      ></Card>
<!--      <p>Общая стоимость: {{totalCost}} ₽</p>-->
      <button class="search__button btn" @click="booking">Бронирование</button>
    </div>
  </div>
</template>

<script>
// data, computed, methods, mounted
import Card from "@/components/Card.vue"
import {useFlightStore} from "@/store/flightStore";

export default {
  name: "Search",
  props: {},
  data() {
    return {
      flightStore: useFlightStore(),
      to: [
        {
          code: '52F51D',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '12:00',
          timeFly: '03:00',
          timeArrival: '18:00',
          cost: 14242,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg',
          selected: false,
        },
        {
          code: 'ВАП2352',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '14:00',
          timeFly: '05:00',
          timeArrival: '18:00',
          cost: 5233,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg',
          selected: false,
        },
        {
          code: 'DFSG235',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '13:00',
          timeFly: '04:00',
          timeArrival: '19:00',
          cost: 2424,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg',
          selected: false,
        },
      ],
      back: [
        {
          code: '52F51D',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '12:00',
          timeFly: '03:00',
          timeArrival: '18:00',
          cost: 4244,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg',
          selected: false,
        },
        {
          code: 'ВАП2352',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '14:00',
          timeFly: '05:00',
          selected: false,
          timeArrival: '18:00',
          cost: 63344,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg'
        },
        {
          code: 'DFSG235',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '13:00',
          timeFly: '04:00',
          selected: false,
          timeArrival: '19:00',
          cost: 42422,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg'
        },
      ],
      selectedTo: null,
      selectedBack: null,
    }
  },
  components: {Card},
  computed: {
  },
  methods: {
    route(id){
      this.$router.push({name: 'single-flight', params: {id: id}})
    },
    booking() {
      if (this.selectedTo && this.selectedBack)
        this.$router.push('/booking')
    }
  },
  mounted(){
    console.log(this.flightStore.searchFlights)
  }
}
</script>

<style scoped>

</style>