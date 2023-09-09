<template>
    <div class="container">
    
        <header>
        <h1>Products will tell you the truth</h1>
        <NavBlue />
        </header>
    
        <div class="pallette" ref="pallette" >
            <div class="modal">
               
               
             
              
            </div>

            <div class="overlay">
                
            </div>


            <Panel :panelTitle = 'Alpha18' image='A18photo.jpg' />
         
            <Panel :panelTitle = 'flowerClub' image="flowerclub.jpg" />

            <Panel :panelTitle = 'planner' image="Planner-wide2.jpg"  />
            <Panel :panelTitle = 'CavendishCars' image="Cavendish Cars.jpg"/> 
            <Panel :panelTitle = 'advertsMaker' image="Admaker2.jpg"/>
            <Panel image="bluesmoke3.jpg"/>

          

        </div>
     
    </div>
</template>

<script setup>
import NavBlue  from '@/components/NavBlue.vue'
import Subnav from '@/components/Subnav.vue'
import Panel from '@/components/Panel.vue'
import { ref } from 'vue'


const Alpha18 = ref("Small taxi business")
const planner = ref("Planner for forgetful managers")
const flowerClub = ref("Local Club of Flower Arrangers")
const CavendishCars = ref("Another Taxi Company")
const advertsMaker = ref("App for editing adverts")

const pallette = ref('')











</script>

<style scoped>



div.overlay{
    height:13em;
    background-image:linear-gradient( rgba(255,0,0,0),#0356ce,#020d77);
    width:52%;
    position:absolute;
    top:54em;
    left:6em;
    opacity:0.9;
}
div.modal{
    height:45em;
    border: 3px rgb(250, 215, 220) ridge;
    width:24%;
    position:absolute;
    
    top:15.25em;
    left:62em;
    border-radius: 0.5em;
    padding:1em;
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77);
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
}

div.modal button{
    font-weight: 500;
    color:antiquewhite;
    
    background-color: transparent;
    font-size:1rem;
    text-decoration:none;
    text-align:center;
    border: 2px ridge antiquewhite;
   
    border-radius: 0.75em;
    padding:0.35em 1.75em;
    margin: 0.5em;
    margin-right:0.5em;
    width:12em;
   
    text-shadow: 5px 3px 20px rgb(243, 242, 238);
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
}



div.container {
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77);
    padding:1em;
    margin:0;
}

header{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-evenly;
    margin-top:2em;
    margin-bottom: 5em;
    box-shadow: 10px 10px 35px rgb(37, 38, 39);


}

header h1 {
    margin-top:0.5em;
}

div.container nav {
    display:flex;
    flex-direction: row;
    height:3.5em;
    border:none;
    margin-top: 0.25em;
  
}



h1,h2,h3{
    color:antiquewhite;
    font-weight: 400;
    text-shadow: 5px 3px 10px rgb(45, 40, 5);
}



div.pallette{
    margin-top: 5em;
    margin-bottom: 10em;;
    margin-left: auto;
    margin-right: auto;


    padding:0.5em;
    width:90%;
    height:52em;
    border:#dfe7ed 2px ridge black;
    border: 5px antiquewhite inset;
    border:none;
    outline: 3px white ridge;
    outline:none;
    border-radius: 0.5em;
    overflow-y:scroll;
    box-shadow: 20px 10px 35px rgb(37, 38, 39);
   
   
}

::-webkit-scrollbar {
    width:0.8em;
    
}

div.pallette::-webkit-scrollbar-track{

    background:hsl(0, 0%, 96%,70%);
    background: none;
}

div.container div.pallette::-webkit-scrollbar-thumb {
    background: antiquewhite;
    background: none;
  border-radius: 0.5em;
  border: 2px white ridge;
  

 
    
    
  }
</style>