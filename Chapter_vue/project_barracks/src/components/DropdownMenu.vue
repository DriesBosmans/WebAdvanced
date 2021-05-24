<template>
  <div>
    <select >
      <option v-for="link in links" :value="link.Key">{{link.Name}}</option>
    </select>

  </div>
</template>

<script>
export default {
name: "DropdownMenu",

data() {
 return {
   links: [{Key: 1, Name: 'TaskTracker'},
     {Key: 2, Name: 'Albumlist'}

   ],
 }

}
}
</script>

<style scoped>

</style>