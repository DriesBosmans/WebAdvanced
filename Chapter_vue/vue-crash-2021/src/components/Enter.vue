<template>
<div id="div1">
<div id="inputs">
  <input name="datum" id="datum">
  <input name="task" id="task">
</div>
  <Button @click="$emit('addTask')" id="knop" class="btn" color="green" text="AddTask" ></Button>
</div>
</template>

<script>
import Button from "./Button";
export default {
name: "Enter",
  components: {Button},

  props:{


  },
  methods: {
  addTask(){
console.log('test')
  }
  }
}
</script>

<style scoped>
#div1{
display: flex;
  flex-direction: row;

}
input{width: 100%;
display: block;
border-radius: 4px;
border: 1px black solid;
margin: 10px;}

#inputs{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.btn {
  margin: 10px;
  background: #0f6674;
}
</style>