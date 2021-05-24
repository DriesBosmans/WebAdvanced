<template>
  <div class="outerresources">
  <div class="innerresources" v-for="resource in resources" :key="resource.key">
    <Resource :resource="resource" ></Resource>

  </div>
    <h1>wololoo</h1>
  </div>
</template>

<script>
import Resource from "@/components/Age_of_Empires2/Resource";
export default {
name: "Resources",
  data(){
  return{

  }
  },
  props: {
    resources: Object,
  },
  components: {Resource}
}
</script>

<style scoped>

.innerresources{padding: 0 20px;}
.outerresources{display: flex;
  width: 100%;
align-items: center;

  margin: 0;
flex-direction: row;
background: #c8af88;
border: #475056 solid 4px;}
h1{display: inline-block;
position: relative;
left: 15%}
</style>