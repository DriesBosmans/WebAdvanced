<template>
  <div :key="task.id" v-for="task in tasks">
    <Task @toggle-reminder="$emit('toggle-reminder',task.id)"
          @delete-task="$emit('delete-task',task.id)" :task="task"></Task>

  </div>
</template>

<script>
import Task from "@/components/Task_tracker/Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>

<style scoped>

</style>