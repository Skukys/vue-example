<template>
  <div :class="['card', 'flex', item.selected ? 'active' : '']" @click="select(id)">
    <div class="card-image"><img :src="item.imgFrom" alt="city"></div>
    <div class="card__content">
      <div class="card__content-top flex">
        <p>{{ item.code }}</p>
        <p>{{ item.airplane }}</p>
      </div>
      <div class="card__content-date">
        {{ item.date }}
      </div>
      <div class="card__content-data flex">
        <div class="card-ot">
          <div class="card-ot__time">{{ item.timeFrom }}</div>
        </div>
        <div class="card-bd">
          В пути {{ item.timeFly }}
        </div>
        <div class="card-pr">
          <div class="card-pr__time">
            {{ item.timeArrival }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-image"><img :src="item.imgArrival" alt="city"></div>
    <div class="card-price">{{ item.cost }} ₽</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['item', 'id', 'back'],
  methods: {
    select(id) {
      this.$emit('updateSelect', id, this.back)
    }
  }
}
</script>

<style scoped>

</style>