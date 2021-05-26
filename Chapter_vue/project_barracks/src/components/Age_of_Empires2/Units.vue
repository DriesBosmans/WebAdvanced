<template>
<div>

</div>
</template>

<script>
import Villager from "@/components/Age_of_Empires2/Villager";
import OwnedUnit from "@/components/Age_of_Empires2/OwnedUnit";
export default {
name: "Units",
  components: {OwnedUnit, },
  props: {
  units: Object,

  }
}
</script>

<style scoped>
div{
  display: inline-block;
  width: 434px;

  height: 160px;

  background-image: url("../../assets/balk.png");
}
</style>