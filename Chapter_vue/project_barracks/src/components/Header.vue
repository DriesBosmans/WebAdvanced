<template>
  <div >
<h1 @click="toggledropdown">{{ header }}</h1>
    <nav v-show="toggle" >
        <ul >
          <li><router-link  to="/TaskTracker">Task tracker</router-link></li>
            <li><router-link to="/Albumlist">Albumlist</router-link></li>
          <li><router-link to="/Buildings">Age of Empires II</router-link></li>
          <li><router-link to="/ReactionTimer">Reaction timer</router-link></li>
          <li><router-link to="/Signupformapp">Signupform</router-link></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
name: "Header",

  props: ['header'],
  data(){
  return {toggle: false}
  },
  methods:{
  toggledropdown(){this.toggle = !this.toggle;}
  }
}
</script>

<style scoped>
div{
  background: crimson;
  margin-bottom: 0;
}
h1{
font-family: "Freestyle Script";
margin-bottom: 0;
  padding: 15px;
  color: white;
}
ul {


  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: crimson;
}

li {


}

li a{
  display: block;
  color: white;
  text-align: center;
  padding: 8px 16px;
  text-decoration: none;
  font-family: "Freestyle Script";
  font-size: xx-large;



}


li a:hover {
  background: #111;
}
@media screen and (min-width: 1000px) {
  li{float: left;
  width: 20%;
  }
  li a{

  }
}
</style>