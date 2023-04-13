<template>
  <div class="wrapper">
    <div class="how-work__title title-block">
      <h2 class="title">Личный кабинет</h2>
      <div class="title-bd"></div>
    </div>
    <div class="personal-content">
      <div class="personal-card flex">
        <div class="personal-card-left">
          <div class="personal-card__img">
            <img src="@/assets/img/image-personal.png" alt="Personal">
          </div>
        </div>
        <div class="personal-card-right">
          <p>Имя: Имя</p>
          <p>Фамилия: Фамилия</p>
          <p>Полётов: 12</p>
          <router-link to="/" style="text-align:center;" class="personal-card__btn btn">Выход</router-link>
        </div>
      </div>
      <div class="search__content-title">
        Бронированния
      </div>
      <div class="personal-bookings">
        <div class="personal-booking flex">
          <p>Код: G62F13F</p>
          <p>21.02.2022</p>
          <p>Вылет: 10:20</p>
          <p>Прилёт: 15:00</p>
          <p>SVO</p>
          <router-link to="/bookingControll" class="personal-booking__btn btn">Управление</router-link>
        </div>
        <div class="personal-booking flex">
          <p>Код: G62F13F</p>
          <p>21.02.2022</p>
          <p>Вылет: 10:20</p>
          <p>Прилёт: 15:00</p>
          <p>SVO</p>
          <router-link to="/bookingControll" class="personal-booking__btn btn">Управление</router-link>
        </div>
        <div class="personal-booking flex">
          <p>Код: G62F13F</p>
          <p>21.02.2022</p>
          <p>Вылет: 10:20</p>
          <p>Прилёт: 15:00</p>
          <p>SVO</p>
          <router-link to="/bookingControll" class="personal-booking__btn btn">Управление</router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Personal"
}
</script>

<style scoped>

</style>