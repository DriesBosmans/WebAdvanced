<template>
<div class="unit" @click="BuyUnit">
  <img :src="require(`../../assets/${img}`)" >
  <div>
    <p>F: {{cost.F}}</p>
    <p>W: {{cost.W}}</p>
    <p>G: {{cost.G}}</p>
  </div>
</div>
</template>

<script>
export default {
name: "Villager",
data(){
  return{
    title: 'Villager',
    cost: {F: 50, W: 0, G: 0},
    img: 'villager.webp'
  }
},
  methods: {
  BuyUnit(){
    this.$emit('koopUnit', [this.cost.F, this.cost.W, this.cost.G])
  }
  }
}
</script>

<style scoped>
img{width: 50px;
height: 50px;}
.unit{

display: flex;
  flex-direction: row;

margin: 10px;
height: 50px;
  width: 80px;
}

div p{
margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
}
</style>