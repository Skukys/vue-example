<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Результат поиска</h1>
      <div class="title-bd"></div>
    </div>
    <div class="search__content flex column">
      <router-link to="/" class="go-back" style="text-align:left; font-size: 24px;">Назад</router-link>
      <div class="search__content-title">Москва - Токио</div>
      <div class="card flex">
        <div class="card-image"><img src="@/assets/img/moscow.jpg" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>52F51D</p>
            <p>Boeing 777</p>
          </div>
          <div class="card__content-date">
            21.02.2022
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">10:20</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20
              </div>
            </div>
          </div>
          <div class="card__content-available">
            Вероятность 70%
          </div>
        </div>
        <div class="card-image"><img src="@/assets/img/tokyo.jpg" alt="city"></div>
        <div class="card-price">12 000 ₽</div>
      </div>
      <div class="card flex active">
        <div class="card-image"><img src="@/assets/img/moscow.jpg" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>52F51D</p>
            <p>Boeing 777</p>
          </div>
          <div class="card__content-date">
            21.02.2022
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">10:20</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20
              </div>
            </div>
          </div>
          <div class="card__content-available">
            Вероятность 70%
          </div>
        </div>
        <div class="card-image"><img src="@/assets/img/tokyo.jpg" alt="city"></div>
        <div class="card-price">12 000 ₽</div>
      </div>
      <div class="search__content-title">Токио - Москва</div>
      <div class="card flex">
        <div class="card-image"><img src="@/assets/img/tokyo.jpg" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>52F51D</p>
            <p>Boeing 777</p>
          </div>
          <div class="card__content-date">
            21.02.2022
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">10:20</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20
              </div>
            </div>
          </div>
          <div class="card__content-available">
            Вероятность 70%
          </div>
        </div>
        <div class="card-image"><img src="@/assets/img/moscow.jpg" alt="city"></div>
        <div class="card-price">12 000 ₽</div>
      </div>
      <div class="card active flex">
        <div class="card-image"><img src="@/assets/img/tokyo.jpg" alt="city"></div>
        <div class="card__content">
          <div class="card__content-top flex">
            <p>52F51D</p>
            <p>Boeing 777</p>
          </div>
          <div class="card__content-date">
            21.02.2022
          </div>
          <div class="card__content-data flex">
            <div class="card-ot">
              <div class="card-ot__time">10:20</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20
              </div>
            </div>
          </div>
          <div class="card__content-available yel">
            Вероятность 70%
          </div>
        </div>
        <div class="card-image"><img src="@/assets/img/moscow.jpg" alt="city"></div>
        <div class="card-price">12 000 ₽</div>
      </div>
      <router-link to="/booking" class="search__button btn" >Бронирование</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>