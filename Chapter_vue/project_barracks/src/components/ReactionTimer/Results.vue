<template>
<p>Reactietijd - {{ score }} ms</p>
  <p class="rank">{{rank}}</p>
</template>

<script>
export default {
name: "Results",
  props:['score']
  ,
  data(){
  return{
    rank: null
  }
  },
  mounted(){
  if (this.score < 250){
    this.rank = 'Heel snel'}
  else if (this.score < 400)
  {
    this.rank = 'snel'
  }
  else {
    this.rank = 'traag'
  }
  }
}
</script>

<style scoped>
.rank{
  font-size: 1.4em;
  color: #0faf87;
  font-width: bold;
}
</style>