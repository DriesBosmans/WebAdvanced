<template>

<div :class="item.like ? 'red' : 'blue'" @dblclick="ChangeClass">
  <h4>{{ item.album }}</h4>
<img :src="require(`../assets/${item.img}`)">

<p>{{item.band}}</p>
</div>

</template>

<script>
export default {
name: "Item",
  props: {item: Object},
methods: {
ChangeClass(){
  this.item.like = !this.item.like
}
}
}
</script>

<style scoped>

h4{
  padding: 15px;
}

div{background: darkred;
  display: inline-block;
  width: 300px;
color: wheat;
  margin: 20px;
font-family: "Lucida Sans Typewriter";
  border-radius: 30px;
}
img{
  border: 5px solid black;
  border-radius: 30px;
}
</style>