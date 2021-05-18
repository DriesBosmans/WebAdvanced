<template>
<div class="building-item">
  <h2 v-bind:id="nameId">{{ title }}</h2>
  <label>Gold: {{ gold }}</label>
  <label>recources needed: {{ steel }} steel, {{ ammunition }} ammunition</label>
  <input v-on:click="purchaseBuilding" class="building-item__button" type="button"
         value="buy this building"/>
</div>
</template>

<script>
export default {
name: "BuildingItem",
  props: {title: String

  },
  data(){
  return{
    titleId: 'building-item__title',
    gold: 5000,
    steel: 100,
    ammunition: 100
  }
  },
  methods: {
purchaseBuilding() {
  alert('gz, ' + this.title + ' built')
}
}
  }
</script>

<style scoped>
.building-item{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>