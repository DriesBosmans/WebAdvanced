<template>
  <div class="outer">
    <Resources :resources="resources" :pop="pop"></Resources>
    <div class="buildingblock">
      <ul>
        <li v-for="(building, i) in buildings" :key="building.id">
          <BuildingItem @click="toggleactive(i)" units="units" :showunits="{showunits: i === activeItem}"
                        :class="{active: i === activeItem}" :building="building"
                        v-on:bob="DoeTransactie($event, resources)"/>
          <div class="unitstekoop">

            <Villager
                v-if="building.title === 'Town center' && i === activeItem && buildings[0].show === true"
                @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Villager')" :popcapped="popcapped">
            </Villager>
            <ManAtArms
                v-if="building.title ==='Barracks' && i === activeItem && buildings[1].show === true"
                       @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Manatarms')">
            </ManAtArms>
            <Spearman
                v-if="building.title ==='Barracks' && i === activeItem && buildings[1].show === true"
                      @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Spearman')">
            </Spearman>
            <trebuchet
                v-if="building.title ==='Castle' && i === activeItem && buildings[3].show === true"
                       @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Trebuchet')">
            </trebuchet>
            <Archer
                v-if="building.title ==='Archery range' && i === activeItem && buildings[2].show === true"
            @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Archer')">
            </Archer>
            <Longbowman
                v-if="building.title ==='Castle' && i === activeItem && buildings[3].show === true"
                        @koopUnit="DoeTransactieUnit($event, resources), VoegUnitToe('Longbowman')">

            </Longbowman>
          </div>


        </li>
      </ul>
    </div>

    <units :units="units" :unit-array="unitArray" @deleteUnit="DeleteUnit($event)" >

    </units>
  </div>

</template>

<script>
// @ is an alias to /src
import ManAtArms from "@/components/Age_of_Empires2/ManAtArms";
import BuildingItem from "../components/Age_of_Empires2/BuildingItem";
import Resources from "@/components/Age_of_Empires2/Resources";
import Villager from "@/components/Age_of_Empires2/Villager";
import Spearman from "@/components/Age_of_Empires2/Spearman";
import Units from "@/components/Age_of_Empires2/Units";
import Trebuchet from "@/components/Age_of_Empires2/Trebuchet";
import Archer from "@/components/Age_of_Empires2/Archer";
import Longbowman from "@/components/Age_of_Empires2/Longbowman";


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
        {unittype: 'archer', food: 0, wood: 25, gold: 45, img: 'archer.webp', amount: 0},
        {unittype: 'spearman', img: 'spearman.webp', amount: 0},
        {unittype: 'longbowman', img: 'longbowman.jpg', amount: 0},
        {unittype: 'trebuchet', img: 'trebuchet.webp', amount: 0}
      ],
      unitArray: [],
      pop: [0,30],
      popcapped: false,



    }
  },


  components: {
    Longbowman,
    Archer,
    Spearman,
    Resources,
    BuildingItem,
    Villager,
    Units,
    ManAtArms,
    Trebuchet
  },

  methods: {
    toggleactive(i) {
      this.activeItem = i;
      this.showunits = i;
    },

    DoeTransactie(price, resources) {
      resources[0].Wood -= price[0]
      resources[3].Stone -= price[1]

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

      if(Unit === 'Villager') {
        this.units[0].amount++
        this.unitArray.push(this.units[0].img)

      }

      if(Unit === 'Manatarms') {
        this.units[1].amount++
        this.unitArray.push(this.units[1].img)
      }
      if(Unit ==='Archer'){
        this.units[2].amount++
        this.unitArray.push(this.units[2].img)
      }
      if(Unit==='Spearman'){
        this.units[3].amount++
        this.unitArray.push(this.units[3].img)
      }
      if(Unit ==='Longbowman'){
        this.units[4].amount++
        this.unitArray.push(this.units[4].img)
      }
      if(Unit === 'Trebuchet'){
        this.units[5].amount++
        this.unitArray.push(this.units[5].img)
      }
      this.pop[0]++
      if(this.pop[0] === this.pop[1])
      {
        this.popcapped = true
      }


    },
    DeleteUnit(unit){
      let index = this.unitArray.indexOf(unit)
      if (index > -1)
      {
        this.unitArray.splice(index, 1)
        this.pop[0]--
      }



}

  },


}

</script>

<style>
*{
  box-sizing: border-box;

}
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
  display: flex!important;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 120px;

}

</style>