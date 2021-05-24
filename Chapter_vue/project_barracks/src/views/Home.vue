<template>
<h1>Welkom</h1>
</template>

<script>
import Testitem from "@/components/AlbumList";
import Header from "@/components/Header";
export default {
  name: "Home",
  components: {Testitem, Header}
}
</script>

<style scoped>
h1{
  margin: 200px;
  font-family: Stencil;
  color: maroon;
}
</style>