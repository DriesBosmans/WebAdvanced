<template>
    <div class="buildings ">
      <h2>{{ building.title }}</h2>
      <img id="gebouw" v-if="gebouwd" :src="require(`../../assets/${building.img}`)" alt="">
      <img :src="require(`../../assets/${building.villager}`)" v-if="bouwen">
      <img :src="require('../../assets/ram.gif')" v-if="afbreken">
      <label> {{ building.price.wood }} wood, {{ building.price.stone }} stone</label>
      <input  id="knop" @click="checkstatus" type="button" :disabled="afbreken||bouwen"
             :value="building.show ? 'delete it' : 'build it'"/>
    </div>
</template>



<script>
export default {
name: "BuildingItem",
  props: {
    building: Object,
    showunits: String,
    units: Object,
  },

  data(){
  return{
    bouwen: false,
    gebouwd: false,
    afbreken: false,
  }
  },


  methods: {
  checkstatus()
  {
    if(this.gebouwd === false)
    {this.bouwgebouw()}
    else{
      this.gebouwafbreken()
    }
  },
  bouwgebouw()
    {
      this.bouwen= true //villager komt tevoorschijn
      this.$emit('bob',[this.building.price.wood, this.building.price.stone])
      setTimeout(() =>{
      this.bouwen = false
      this.gebouwd = true
        this.building.show = true

    },2000)
      },
gebouwafbreken()
{
  this.afbreken = true
  this.gebouwd = false
  setTimeout(()=>{
    this.afbreken = false

    this.building.show = false
  } , 2000)
}
    }

  }

</Script>

<style scoped>
#outerbuilding{

  width: 25%;
}
h2{
  font-family: Castellar;
  font-weight: bold;
}
.active{
color: #cbe0bc
}

img{width: 400px;

}
.buildings{
  flex-wrap: wrap;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
}


#knop{
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
  background-color: #c8af88;
}
#knop[disabled]{
opacity: 0.2;
}
</style>