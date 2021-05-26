<template>
  <div>
    <img src="../../assets/villager.webp">
    <h1>{{villager.amount}}</h1>
  </div>
</template>

<script>
import Villager from "@/components/Age_of_Empires2/Villager";
export default {
name: "OwnedUnit",
  components: Villager,
  props: {
  villager: Object
  }
}
</script>

<style scoped>

</style>