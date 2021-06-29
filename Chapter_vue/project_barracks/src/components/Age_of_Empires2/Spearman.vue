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
  name: "Spearman",
  data(){
    return{
      title: 'Spearman',
      cost: {F: 35, W: 25, G: 0},
      img: 'spearman.webp'
    }
  },
  methods: {
    BuyUnit(popcapped){
      if(!this.popcapped) {

        this.$emit('koopUnit', [this.cost.F, this.cost.W, this.cost.G])
      }
      else{alert('you are popcapped')}
      console.log(popcapped)
    }
  },
  props:{
    popcapped: Boolean,
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
  width: 100px;
}

div p{
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
}
</style>