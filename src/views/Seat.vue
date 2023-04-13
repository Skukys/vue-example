<template>
  <div class="wrapper">
    <div class="title-block">
      <h1 class="title">Выбор места</h1>
      <div class="title-bd"></div>
    </div>
    <div class="seat-content">
      <div class="seat-bg">
        <div class="seat-bg__img">
          <img src="@/assets/img/bg-seat.jpg" alt="bgSeat">
        </div>
        <div class="seat-bg__data">
          <div class="seat-bg__data-item select">
            <div class="seat-bg__data-item-rectangle"></div>
            <div class="seat-bg__data-item-text">- Выбранное место</div>
          </div>
          <div class="seat-bg__data-item ext">
            <div class="seat-bg__data-item-rectangle"></div>
            <div class="seat-bg__data-item-text">- Место занято</div>
          </div>
        </div>
      </div>
      <div class="seat-places">
        <div class="seat-places__table places-table">
          <div class="places-table__row">
            <div class="places-table__row-item first"></div>
            <div class="places-table__row-item">A</div>
            <div class="places-table__row-item">B</div>
            <div class="places-table__row-item">C</div>
            <div class="places-table__row-item">D</div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec ext"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec ext"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec ext"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec ext"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
          </div>
          <div class="places-table__row">
            <div class="places-table__row-item first">1</div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec"></div></div>
            <div class="places-table__row-item"><div class="rec ext"></div></div>
          </div>
        </div>
        <div class="seat-places__selected">
          Вы выбрали место - 4А
        </div>
        <div class="seat-places__btn btn">Выбрать</div>
        <router-link to="/bookingControll" class="seat-places__back go-back">Назад</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seat"
}
</script>

<style scoped>

</style>