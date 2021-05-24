<template>
<div>
<img :src="require(`../../assets/${resource.img}`)" :alt="resource.type">
  <span>{{resource.Food}}</span>
  <span>{{resource.Wood}}</span>
  <span>{{resource.Gold}}</span>
  <span>{{resource.Stone}}</span>
</div>
</template>

<script>
export default {
name: "Resource",
  props: {resource: Object}
}
</script>
<style scoped>
div{display: inline-block;
  padding: 0 10px;
}
img{padding: 5px;}
</style>