<template>
  <div class="wrapper">
    <Header></Header>
    <div class="main">
      <div class="main-bg"><img src="@/assets/img/bg.jpg" alt="Bg"></div>
      <div class="main__content">
        <div class="main__title">
          <h1>Мы сближаем города, <br>вы - живете там, где хотите.</h1>
          <div class="main__title-bd"></div>
        </div>
        <form action="#" class="main__form form">
          Airport from
          <select class="input-create" v-model.number="formData.airport_from">
            <option :value="element.id" v-for="element in airports">{{ element.city }}</option>
          </select>
          Airport to
          <select class="input-create" v-model.number="formData.airport_to">
            <option :value="element.id" v-for="element in airports">{{ element.city }}</option>
          </select>
          <label class="label-date">
            Туда
            <input v-model="formData.date" type="date">
          </label>
          <label class="label-date">
            Обратно
            <input type="date">
          </label>
          <div class="form-passenger">
            <div class="form-passenger__icon"><img src="@/assets/img/person.png" alt="Person"></div>
            <div class="form-passenger__count">Пассажиров <span>5</span></div>
            <div class="form-passenger__control flex">
              <div class="form-passenger__count-plus">+</div>
              <div class="form-passenger__count-plus">-</div>
            </div>
          </div>
          <div class="form-btn btn" @click="search">Найти билеты</div>
        </form>
      </div>
    </div>
    <div class="how-work">
      <div class="how-work__title title-block">
        <h2 class="title">Как работает?</h2>
        <div class="title-bd"></div>
      </div>
      <div class="how-work__container flex">
        <div class="how-work__content flex column">
          <div class="how-work__content-item">1. Выберите удобную дату</div>
          <div class="how-work__content-item">2. Накопите больше 50%<br>бронирований на рейс</div>
          <div class="how-work__content-item">3. Получение снижение <br>стоимости</div>
        </div>
        <div class="how-work__graphic graphic flex column">
          <div class="graphic__header flex">
            <div class="graphic__date">
              <label>
                Дата
                <input type="date" value="21.02.2022">
              </label>
            </div>
            <div class="graphic-passengers">
              <div class="graphic-passengers__ttl">Пассажиров</div>
              <div class="graphic-passengers__container flex">
                <div class="graphic__icon"><img src="@/assets/img/person.png" alt="Person"></div>
                <div class="graphic__count">1</div>
                <div class="graphic__control flex">
                  <div class="graphic__count-plus">+</div>
                  <div class="graphic__count-min">-</div>
                </div>
              </div>
            </div>
          </div>
          <div class="graphic-graphic flex column center">
            <div class="graphic-image">
              <div class="graphic-pass">
                <canvas id="myCanvas" width="350" height="350"></canvas>
              </div>
              <div class="graphic-count"></div>
            </div>
            <div class="graphic-info flex">
              <div class="graphic-info__price">Цена</div>
              <div class="graphic-info__pass">Пассажиры</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sale">
      <div class="title-block">
        <h2 class="title">Акции</h2>
        <div class="title-bd"></div>
      </div>
      <div class="sale-list">
        <div class="sale-arrows__prev"></div>
        <div class="sale-arrows__next"></div>
        <div class="sale-item">
          <div class="sale-item__bg">
            <img src="@/assets/img/sale-bg.jpg" alt="sale-bg">
          </div>
          <div class="sale-item__content flex column">
            <div class="sale-item__title">Название акции</div>
            <div class="sale-item__desc">По своей сути рыбатекст является альтернативой традиционному lorem
              ipsum.
            </div>
          </div>
          <div class="sale-item__button">Подробнее <img src="@/assets/img/right-arrow.png" alt="right arrow">
          </div>
        </div>
        <div class="sale-item">
          <div class="sale-item__bg">
            <img src="@/assets/img/sale-bg.jpg" alt="sale-bg">
          </div>
          <div class="sale-item__content flex column">
            <div class="sale-item__title">Название акции</div>
            <div class="sale-item__desc">По своей сути рыбатекст является альтернативой традиционному lorem
              ipsum.
            </div>
          </div>
          <div class="sale-item__button">Подробнее <img src="@/assets/img/right-arrow.png" alt="right arrow">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-sale flex">
    <div class="form-sale__img">
      <img src="@/assets/img/subscribe.jpg" alt="sale img">
    </div>
    <div class="form-sale__content">
      <div class="form-sale__title">Подпишитесь на закрытые акции</div>
      <div class="form-sale__form flex">
        <input type="text" class="base-input" placeholder="E-mail">
        <a href="#">Подписаться <img src="@/assets/img/right-arrow.png" alt="arrow"></a>
      </div>
    </div>
  </div>
  <div class="doverie">
    <div class="title-block">
      <h2 class="title">Доверие компании</h2>
      <div class="title-bd"></div>
    </div>
    <div class="doverie__content">
      Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры способствует
      подготовке и реализации прогресса профессионального сообщества. В своём стремлении повысить качество жизни,
      они забывают, что разбавленное изрядной долей эмпатии, рациональное мышление, в своём классическом
      представлении, допускает внедрение распределения внутренних резервов и ресурсов.
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import {useFlightStore} from "@/store/flightStore";

export default {
  data(){
    return {
      airports: [],
      flightStore: useFlightStore(),
      formData: {
        airport_from: null,
        airport_to: null,
        date: null
      }
    }
  },
  components: {
    Header, Footer
  },
  methods: {
    async search(){
      let res = await fetch('http://flights/routes/getFlight.php', {method: 'POST', body: JSON.stringify(this.formData)})
      let json = await res.json()
      if(res.ok) {
        this.flightStore.searchFlights = json.data
        this.$router.push('/search')
      }

    }
  },
  async mounted() {
    let res = await fetch('http://flights/routes/getAirport.php', {method: 'GET'})
    let json = await res.json()
    this.airports = json.data
  }
}

</script>
