<template>
<div class="block" v-if="showBlock" @click="stopTimer">
  click me
</div>
</template>

<script>
export default {
name: "Block",
props: [
  'delay'
],
  data(){
  return{
    showBlock: false,
    timer: null,
    reactionTime: 0
  }
  },
  mounted(){
  console.log('component mounted')
    setTimeout(() =>{
      this.showBlock = true
      this.startTimer()
      console.log(this.delay)
    }, this.delay)
  },


  methods:{
  startTimer(){
this.timer = setInterval(() => {
  this.reactionTime += 10}
  ,10)
},
stopTimer(){
clearInterval(this.timer)
  this.$emit('end', this.reactionTime)
  console.log(this.reactionTime)
}
}}
</script>

<style scoped>
.block{
  width: 400px;
  border-radius: 20px;
  background: seagreen;
  color: white;
  padding: 100px 0;
  margin: 40px auto;
}
</style>