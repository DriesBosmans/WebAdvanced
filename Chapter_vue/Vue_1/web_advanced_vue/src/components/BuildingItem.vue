<template>
  <div class="building-item">
    <h2>{{title}}</h2>
    <label>Gold: {{ gold }}</label>
    <label>resources needed: {{ steel }} steel, {{ ammunition }} ammunition</label>
    <input type="button"
           value="purchase building"
           v-on:click="purchaseBuilding()"
           />
  </div>
</template>

<script>
export default {
  name: "BuildingItem",
  props: {
    title: String
  },
  data()
  {
    return {
      gold: 5000,
      steel: 100,
      ammunition: 100
    }
  },
  methods: {
    purchaseBuilding()
    {
      alert("proficiat u heeft een " + this.title + " gekocht")
    }
  }
}
</script>

<style scoped>
.building-item{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
