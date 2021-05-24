<template>
  <div  id="outer" >
<div class="buildings "   >
  <h2 >{{ building.title }}</h2>
  <img v-show="building.show" :src="require(`../../assets/${building.img}`)" >
 <img id={{building.id}}  :src="require(`../../assets/${building.villager}`)" class="invisible" >
  <label>recources needed: {{ building.price.wood }} wood, {{ building.price.stone }} stone</label>
  <input @click="bouwgebouw(building.price)" id=""  type="button"
         :value="building.show ? 'delete it' : 'build it'"/>
  <unit></unit>
  </div>
  </div>
</template>



<script>
import timer from "@/components/Age_of_Empires2/timer";
export default {
name: "BuildingItem",
  props: {
    building: Object,
    showunits: String,
    units: Object,


  },
  methods: {
  bouwgebouw(){
    this.building.show = !this.building.show;
this.$emit(this.building.price)

    }





}

  }

</Script>

<style scoped>
#outer{

}
.active{
color: red;}
img{width: 400px;}
.buildings{
  flex-wrap: wrap;
  height:600px;
width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.invisible{display: none;}
.isselected{}
</style>