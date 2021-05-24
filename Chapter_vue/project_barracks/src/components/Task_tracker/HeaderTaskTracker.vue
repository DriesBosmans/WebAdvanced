<template>
  <header>
    <h1><a href="https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=1938s" target="_blank">{{ title }}</a></h1>
    <Button @btn-click="$emit('toggle-add-task')"
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'"/>
  </header>
</template>

<script>
import Button from "@/components/Task_tracker/Button";
export default {
  name: "Header",
  components: {
    Button
  },
  props: {
    title: String,
    showAddTask: Boolean,
  }
}
</script>

<style scoped>
h1{font-family: "Bauhaus 93";}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
a{text-decoration: none;
}
</style>