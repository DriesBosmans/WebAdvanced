<template>
<div>
<img v-for="unit in unitArray" :src="require(`../../assets/${unit}`)" @click="DeleteUnit(unit)" class="unit">

</div>
</template>

<script>


export default {
name: "Units",
  components: {},
  props: {
  units: Object,
unitArray: Array,
  }
  ,
  methods:{
  DeleteUnit(unit){
    this.$emit('deleteUnit',unit)
  }
  }
}
</script>

<style scoped>
div{
 display: inline-block;
  width: 434px;
padding: 5px;
  height: 160px;

  text-align: left;
  background-image: url("../../assets/balk.png");
}
.unit{
  margin: 2px;
}
</style>