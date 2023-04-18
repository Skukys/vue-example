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
      <div :class="['card', 'flex', element.selected ? 'active' : '']" v-for="(element, id) in to" @click="select(id)">
        <div class="card-image"><img :src="element.imgFrom" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>{{element.code}}</p>
            <p>{{element.airplane}}</p>
          </div>
          <div class="card__content-date">
            {{element.date}}
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">{{element.timeFrom}}</div>
            </div>
            <div class="card-bd">
              В пути {{element.timeFly}}
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                {{element.timeArrival}}
              </div>
            </div>
          </div>
        </div>
        <div class="card-image"><img v-bind:src="to[0].imgArrival" alt="city"></div>
        <div class="card-price">{{element.cost}} ₽</div>
      </div>

      <div class="search__content-title">Токио - Москва</div>
      <div :class="['card', 'flex', element.selected ? 'active' : '']" @click="select(id, false)" v-for="(element, id) in back">
        <div class="card-image"><img :src="element.imgFrom" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>{{element.code}}</p>
            <p>{{element.airplane}}</p>
          </div>
          <div class="card__content-date">
            {{element.date}}
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">{{element.timeFrom}}</div>
            </div>
            <div class="card-bd">
              В пути {{element.timeFly}}
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                {{element.timeArrival}}
              </div>
            </div>
          </div>
        </div>
        <div class="card-image"><img v-bind:src="to[0].imgArrival" alt="city"></div>
        <div class="card-price">{{element.cost}} ₽</div>
      </div>

      <button class="search__button btn" @click="booking">Бронирование</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return {
      test: 'Hello',
      to: [
        {
          code: '52F51D',
          airplane: 'Boeing 777',
          date: '21.03.2023',
          timeFrom: '12:00',
          timeFly: '03:00',
          timeArrival: '18:00',
          cost: 12000,
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
          cost: 12000,
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
          cost: 12000,
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
          cost: 12000,
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
          cost: 12000,
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
          cost: 12000,
          imgFrom: 'https://kudamoscow.ru/uploads/1c239f459c5805a1b525cf0fddd564ba.jpg',
          imgArrival: 'https://fregataero.ru/images/tokio-4.jpeg'
        },
      ],
      selectedTo: null,
      selectedBack: null,
    }
  },
  methods: {
    select(id, to = true){

      if(to) {
        this.to.forEach(item => item.selected = false)
        this.to[id].selected = true
        this.selectedTo = this.to[id]
      } else {
        this.back.forEach(item => item.selected = false)
        this.back[id].selected = true
        this.selectedBack = this.back[id]
      }
    },
    booking(){
      console.log(this.selectedTo)
      console.log(this.selectedBack)

      if(this.selectedTo && this.selectedBack)
        this.$router.push('/booking')

    }
  }
}
</script>

<style scoped>

</style>