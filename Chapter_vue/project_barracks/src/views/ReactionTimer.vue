<template>
<h1>Reaction timer component</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
<block v-if="isPlaying" :delay="delay" @end="endGame"></block>
  <Results v-if="showResults" :score="score"></Results>

</template>

<script>
import Block from "@/components/ReactionTimer/Block";
import Results from "@/components/ReactionTimer/Results";
export default {
name: "ReactionTimer",
  components: {Results, Block},
  data(){
  return{
    isPlaying: false,
    delay: null,
    score: null,
    showResults: false,
  }
  },
methods: {
  start(){
    this.delay = 2000 + Math.random() * 5000;
    this.isPlaying = true;
    this.showResults = false;
    console.log(this.delay)
  },
  endGame(reactionTime){
    this.score = reactionTime
    this.isPlaying = false
    this.showResults = true
  }
}
}
</script>

<style scoped>
h1{font-style: italic;
font-family: "Fira Code Retina"}

button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>