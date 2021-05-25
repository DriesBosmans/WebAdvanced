<template>
  <div class="outer">
    <Resources :resources="resources"></Resources>
    <div class="buildingblock">
      <ul>
        <li v-for="(building, i) in buildings" :key="building.id">
          <BuildingItem @click="toggleactive(i)" units="units" :showunits="{showunits: i === activeItem}"
                        :class="{active: i === activeItem}" :building="building"
                        v-on:bob="DoeTransactie($event, resources)"/>
          <div class="unitstekoop">

            <Villager
                v-if="building.title === 'Town center' && (i === activeItem) && buildings[0].show === true"
                @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Villager', units)">
            </Villager>

            <ManAtArms v-if="building.title ==='Barracks' && i === activeItem && buildings[1].show === true"
                       @koopUnit="DoeTransactieUnit($event, resources)">
            </ManAtArms>

          </div>


        </li>
      </ul>
    </div>

    <units >

    </units>
  </div>

</template>

<script>
// @ is an alias to /src
import ManAtArms from "@/components/Age_of_Empires2/ManAtArms";
import BuildingItem from "../components/Age_of_Empires2/BuildingItem";
import Resources from "@/components/Age_of_Empires2/Resources";
import Villager from "@/components/Age_of_Empires2/Villager";

import Units from "@/components/Age_of_Empires2/Units";

export default {
  name: 'Buildings',
  data() {

    return {
      showunits: 'show',
      activeItem: null,
      buildings: [
        {
          title: 'Town center',
          img: 'tc.webp',
          villager: 'giphy.gif',
          price: {wood: 275, stone: 100},
          isSelected: false,
          id: 1,
          show: false,
          unitForSale: Villager,
        },
        {
          title: 'Barracks',
          img: 'barracks.webp',
          villager: 'giphy.gif',
          price: {wood: 175, stone: 0},
          isSelected: false,
          id: 2,
          show: false
        },
        {
          title: 'Archery range',
          img: 'archery.webp',
          villager: 'giphy.gif',
          price: {wood: 175, stone: 0},
          isSelected: false,
          id: 3,
          show: false
        },
        {
          title: 'Castle',
          img: 'castle.webp',
          villager: 'giphy.gif',
          price: {wood: 0, stone: 650},
          isSelected: false,
          id: 4,
          show: false
        }
      ],
      resources: [
        {type: 'Wood', Wood: 1000, img: 'Aoe2de_wood.webp'},
        {type: 'Food', Food: 1000, img: 'Aoe2de_food.webp'},
        {type: 'Gold', Gold: 1000, img: 'Aoe2de_gold.webp'},
        {type: 'Stone', Stone: 1000, img: 'Aoe2de_stone.webp'}
      ],
      units: [
        {unittype: 'villager', food: 50, wood: 0, gold: 0, img: 'villager.webp', amount: 0},
        {unittype: 'man-at-arms', food: 60, wood: 0, gold: 20, img: 'manatarms.webp', amount: 0},
        {unittype: 'archer', food: 0, wood: 25, gold: 45, img: 'archer.webp', amount: 0}
      ],
      // unitArray: [{img1: 'villager.webp'}]



    }
  },


  components: {

    Resources,
    BuildingItem: BuildingItem,
    Villager,
    Units,
    ManAtArms

  },
  methods: {
    toggleactive(i) {
      this.activeItem = i;
      this.showunits = i;
    },
    DoeTransactie(price, resources) {


      resources[0].Wood -= price[0]
      resources[3].Stone -= price[1]
      console.log(resources)
      return resources;


    },
    DoeTransactieUnit(price, resources) {

      resources[1].Food -= price[0]
      resources[0].Wood -= price[1]
      resources[2].Gold -= price[2]

      return resources;
    },

    VoegUnitToe(Unit, units)
    {
      if(Unit === 'Villager')
      units[0].amount++

      // unitArray.push(units[0].img)
      if(Unit === 'ManAtArms')
      units[1].amount++
      console.log(units[0].amount)
    }
  },


}

</script>

<style>

ul {
  display: flex;

  align-items: flex-end;
}

.outer {
  display: flex;
  flex-direction: column;
  background-repeat: repeat;
  height: 90vh;
  width: 100%;
  background-image: url("../assets/map.png");

}

div {
  font-family: Castellar, sans serif;
  font-palette: dark;
  font-weight: bold;
}

.buildingblock {

  background-repeat: repeat;

  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

}

li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



.unitstekoop {
  display: inline-block;
  width: 100%;
  height: 120px;

}
</style>