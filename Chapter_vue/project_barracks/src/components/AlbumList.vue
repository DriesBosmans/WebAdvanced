<template>
  <h1>{{Header}}</h1>
<h4> {{Band}} </h4>
  <ul>
    <li v-for="album in albums"
        :class="{fav: album.isfav}"
    @dblclick="togglefav(album)"
        >
      <h5>{{album.title}}</h5>
      <img :src="album.img" :alt="album.title"/>
      <p>{{album.year}}</p>
    </li>
  </ul>
  <img src="../assets/okcomputer.jpg" /><br><br>
  <img :src="albums[0].img" :alt="albums[0].title">

</template>

<script>
export default {
data() {
  return {
    albums: [
      {title: 'Ok computer', year: 1997, img: "../assets/okcomputer.jpg", isfav: true},
      {title: 'In rainbows', year: 2007, img: '../assets/dirt.jpg', isfav: true},
      {title: 'King of lilmbs', year: 2010, img: '../assets/index3.jpg', isfav: false}
    ],
    Band: 'band',
  }
},
  props: ['Header'],

methods:{
  togglefav(album){
    album.isfav = !album.isfav;
  },

},
  computed:{

  }
}
</script>

<style scoped>
.box{
  padding: 100px 0;
  width:100px;
  text-align: center;
  display: inline-block;
  margin: 20px;
  background: aqua;
}
li{list-style-type: none;
margin: 20px;}

.fav{background: azure;
border: 1px solid black;
border-radius: 10px;}

.active{
  background: green;
  border: 1px solid black;
  border-radius: 10px;
}
</style>