<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Бронирование</h1>
      <div class="title-bd"></div>
    </div>
    <div class="search__content flex column">
      <router-link to="/search" class="go-back" style="text-align:left; font-size: 24px;">Назад</router-link>
      <div class="search__content-title">Выбранные рейсы</div>
      <div class="search__content-subtitle">
        Москва - Токио
      </div>
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
              <div class="card-ot__time">10:20<br>SVO</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20<br>TKY
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
      <div class="search__content-subtitle">
        Токио - Москва
      </div>
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
              <div class="card-ot__time">10:20<br>TKY</div>
            </div>
            <div class="card-bd">
              В пути 06:40
            </div>
            <div class="card-pr">
              <div class="card-pr__time">
                16:20<br>SVO
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
      <div class="search__content-title"
           style="display: flex; justify-content: space-between; align-items: center; width: 100%">
        <p style="line-height: 0">Данные о пассажирах</p>
        <button class="btn" style="padding: 0 100px; height: 60px">Добавить</button>
      </div>
      <div class="booking-passengers flex column">
        <div class="passenger">
          <input type="text" placeholder="Имя ..." class="base-input">
          <input type="text" placeholder="Фамилия ..." class="base-input">
          <label>
            Дата рождения
            <input type="date" placeholder="Имя ...">
          </label>
          <input type="text" placeholder="Номер документа ..." class="base-input">
          <button class="del"><img src="@/assets/img/delete.png" alt="Delete"></button>
        </div>
        <div class="passenger">
          <input type="text" placeholder="Имя ..." class="base-input">
          <input type="text" placeholder="Фамилия ..." class="base-input">
          <label>
            Дата рождения
            <input type="date" placeholder="Имя ...">
          </label>
          <input type="text" placeholder="Номер документа ..." class="base-input">
          <button class="del"><img src="@/assets/img/delete.png" alt="Delete"></button>
        </div>
        <div class="passenger">
          <input type="text" placeholder="Имя ..." class="base-input">
          <input type="text" placeholder="Фамилия ..." class="base-input">
          <label>
            Дата рождения
            <input type="date" placeholder="Имя ...">
          </label>
          <input type="text" placeholder="Номер документа ..." class="base-input">
          <button class="del"><img src="@/assets/img/delete.png" alt="Delete"></button>
        </div>
      </div>
      <div class="final-cost flex column">
        <p>Финальная стоимость 72000₽</p>
        <router-link to="/bookingControll" class="final-cost__btn btn">Бронировать</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Booking"
}
</script>

<style scoped>

</style>