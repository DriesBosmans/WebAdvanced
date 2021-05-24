<template>
  <div class="buildings">
    <Resources :resources="resources"></Resources>
    <ul>
      <li v-for="(building, i) in buildings"  :key="building.id">
        <BuildingItem  @click="toggleactive(i)" units="units" :showunits="{showunits: i === activeItem}"
                       :class="{active: i === activeItem}" :building="building" v-on:bob="DoeTransactie($event, resources)"/>
      </li>
    </ul>



  </div>

</template>

<script>
// @ is an alias to /src

import BuildingItem from "../components/Age_of_Empires2/BuildingItem";
import Resources from "@/components/Age_of_Empires2/Resources";

export default {
  name: 'Buildings',
  data() {
    return {
      showunits: 'show',
activeItem: null,
      buildings : [
        {title : 'Town center', img: 'tc.webp', villager:'giphy.gif' , price: {wood: 275, stone: 100}, isSelected: false, id: 1 , show: false},
        {title : 'Barracks', img: 'barracks.webp', villager:'giphy.gif' , price: {wood: 175, stone: 0}, isSelected: false, id: 2, show: false},
        {title : 'Archery range', img:'archery.webp', villager:'giphy.gif' , price: {wood: 175, stone: 0}, isSelected: false, id: 3, show: false},
        {title: 'Castle', img:'castle.webp', villager:'giphy.gif' ,price: {wood: 0, stone: 650}, isSelected: false, id:4, show: false }
        ],
      resources: [
        {type: 'Wood', Wood: 1000, img: 'Aoe2de_wood.webp'},
        {type: 'Food', Food: 1000, img: 'Aoe2de_food.webp'},
        {type: 'Gold', Gold: 1000, img: 'Aoe2de_gold.webp'},
        {type: 'Stone', Stone: 1000, img: 'Aoe2de_stone.webp'}
      ],
      units: [
        {unittype: 'villager', food: 50, wood: 0, gold: 0, img: 'villager.webp'},
        {unittype: 'man-at-arms', food: 60, wood: 0, gold: 20, img: 'manatarms.webp'},
        { unittype: 'archer', food: 0, wood: 25, gold: 45, img: 'archer.webp'}
      ],
      kost:[{food: 100}, {gold: 100}]


    }
  },


  components: {
    Resources,
    BuildingItem: BuildingItem
  },
  methods: { toggleactive(i) {this.activeItem = i;
  this.showunits = i;},
    DoeTransactie(price, resources)
    {


resources[0].Wood-=price[0]
      resources[3].Stone-=price[1]
      console.log(resources)
      return resources;


    }

    },

  }

</script>

<style>

ul{display: flex;
justify-content: center;
  align-items: flex-end;
}
div.buildings{background-image: url("../assets/map.png");
background-repeat: repeat;

width: 100%}
div{font-family: Castellar, sans serif;

  font-palette: dark;
font-weight: bold;}


li{list-style-type: none}
</style>