<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Управление бронированием</h1>
      <div class="title-bd"></div>
    </div>
    <div class="search__content">
      <router-link to="/booking" class="go-back" style="text-align:left; font-size: 24px;">Назад</router-link>
      <div class="search__content-title">
        Рейс
      </div>
      <div class="card-control flex">
        <div class="card-control__left flex column">
          <div class="card-control__left-data flex column">
            <p>Код: 23А252А</p>
            <p>Туда: 2G25GF3</p>
            <p>Обратно: 5G25DE</p>
          </div>
          <div class="card-control__left-btn btn">72000 ₽</div>
        </div>
        <div class="card-control__right">
          <div class="card-control__right-top flex center column right-card right-top">
            <div class="right-card__title">Туда</div>
            <div class="right-card__date">21.02.2022</div>
            <div class="right-card__time flex">
              <p class="right-card-top">10:20</p>
              <div class="right-card-inway">В пути 06:40</div>
              <p class="right-card-bot">16:20</p>
            </div>
            <div class="right-card-data flex">
              <div class="right-card-data__left">
                SVO<br>Москва
              </div>
              <div class="card__content-available right-card__available">
                Вероятность 70%
              </div>
              <div class="right-card-data__right">
                TKY<br>Токио
              </div>
            </div>
          </div>
          <div class="card-control__right-bd">

          </div>
          <div class="card-control__right-top flex center column right-card right-bot">
            <div class="right-card__title">Туда</div>
            <div class="right-card__date">21.02.2022</div>
            <div class="right-card__time flex">
              <p class="right-card-top">10:20</p>
              <div class="right-card-inway">В пути 06:40</div>
              <p class="right-card-bot">16:20</p>
            </div>
            <div class="right-card-data flex">
              <div class="right-card-data__left">
                SVO<br>Москва
              </div>
              <div class="card__content-available right-card__available">
                Вероятность 70%
              </div>
              <div class="right-card-data__right">
                TKY<br>Токио
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search__content-title">
        Пассажиры
      </div>
      <div class="search__content-passengers">
        <div class="control-passenger">
          <div class="control-passenger__header" data-click="openPopup">
            <div class="control-passenger__title">Алексей</div>
            <div class="control-passenger__arrow"><img src="@/assets/img/arrow-down.png" alt="Arrow"></div>
          </div>
          <div class="control-passenger__body">
            <p>Фамилия: Фамилия</p>
            <p>Дата рождения: 21.02.2002</p>
            <p>Номер документа: 512551215</p>
            <p>Место туда: 7A <router-link to="/seat" >Выбрать</router-link></p>
            <p>Место обратно: 8B <router-link to="/seat" >Выбрать</router-link></p>
          </div>
          <div class="control-passenger__bd"></div>
        </div>
        <div class="control-passenger">
          <div class="control-passenger__header" data-click="openPopup">
            <div class="control-passenger__title">Алексей</div>
            <div class="control-passenger__arrow"><img src="@/assets/img/arrow-down.png" alt="Arrow"></div>
          </div>
          <div class="control-passenger__body">
            <p>Фамилия: Фамилия</p>
            <p>Дата рождения: 21.02.2002</p>
            <p>Номер документа: 512551215</p>
            <p>Место туда: 7A <router-link to="/seat">Выбрать</router-link></p>
            <p>Место обратно: 8B <router-link to="/seat">Выбрать</router-link></p>
          </div>
          <div class="control-passenger__bd"></div>
        </div>
        <div class="control-passenger">
          <div class="control-passenger__header" data-click="openPopup">
            <div class="control-passenger__title">Алексей</div>
            <div class="control-passenger__arrow"><img src="@/assets/img/arrow-down.png" alt="Arrow"></div>
          </div>
          <div class="control-passenger__body">
            <p>Фамилия: Фамилия</p>
            <p>Дата рождения: 21.02.2002</p>
            <p>Номер документа: 512551215</p>
            <p>Место туда: 7A <router-link to="/seat">Выбрать</router-link></p>
            <p>Место обратно: 8B <router-link to="/seat">Выбрать</router-link></p>
          </div>
          <div class="control-passenger__bd"></div>
        </div>
        <div class="control-passenger">
          <div class="control-passenger__header" data-click="openPopup">
            <div class="control-passenger__title">Алексей</div>
            <div class="control-passenger__arrow"><img src="@/assets/img/arrow-down.png" alt="Arrow"></div>
          </div>
          <div class="control-passenger__body">
            <p>Фамилия: Фамилия</p>
            <p>Дата рождения: 21.02.2002</p>
            <p>Номер документа: 512551215</p>
            <p>Место туда: 7A <router-link to="/seat">Выбрать</router-link></p>
            <p>Место обратно: 8B <router-link to="/seat">Выбрать</router-link></p>
          </div>
          <div class="control-passenger__bd"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingControll"
}
</script>

<style scoped>

</style>