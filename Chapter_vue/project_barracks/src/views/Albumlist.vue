<template>
  <div class="outer">
  <div  v-for="item in items" >
  <Item  :item="item" ></Item>
  </div>
  </div>
</template>
<script>

import Header from "@/components/Header";
import Testitem from "@/components/AlbumList";
import Item from "@/components/Item";
export default {
name: "Albumlist",
  components: { Testitem, Item
},

  data(){
    return{
      items: [{album: 'OK Computer', band: 'Radiohead', id:'1', like: true, img:'okcomputer.jpg'},
        {album: 'In utero', band: 'Nirvana', like: true, id:'2', img:'in_utero.jpg'},
        {album: 'Dirt', band: 'Alice in chains', like: false, id:'3', img:'dirt.jpg'}
      ]
    }

  },
  methods:
      {

      }
}
</script>
<style scoped>
Item{
  display: inline-block;
}
.red{background: cadetblue;}
.blue{
  background: cornflowerblue;
}
div{background: ghostwhite;
}
.outer{
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  transition: all;
}

</style>