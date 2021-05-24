<template>
<div class="container">
  <Header @toggle-add-task="toggleAddTask"
          title="Task tracker"
  :showAddTask="showAddTask"></Header>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask"></AddTask>
  </div>
  <Tasks @toggle-reminder="toggleReminder"
         @delete-task="deleteTask"  :tasks="tasks"></Tasks>

</div>
  <!-- npm run serve -->
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import AddTask from "@/components/AddTask";

export default {
  name: 'App',
  components: {

    Tasks,
Header,
    AddTask,

  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  emits: ['addTask'],
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks= [...this.tasks, task]
    },
    deleteTask(id) {
      if (confirm('Are you sure?'))
      {
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }

    },

    toggleReminder(id)
    {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)
    }
    },



  created() {
    this.tasks = [
      {
        id: 1,
        text: "Docters Appointment",
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 2d at 1:30',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food shopping',
        day: 'March 3d at 1:30',
        reminder: false,
      },
    ]
  }}




</script>

<style>

*{box-sizing: border-box;
margin: 0;
padding: 0;
}
body{font-family:  sans-serif;}
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding:30px;
  border-radius: 5px;
}
.btn{
  display:inline-block;
  background: #000000;
  color:#ffffff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
}
.btn-block{
  display: block;
  width: 100%;
}
.btn:active{
  transform: scale(0.98);
}
.btn:focus{
  outline: none;
}

body{

}
</style>
