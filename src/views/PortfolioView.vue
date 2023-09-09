<template>

<transition name="page" appear>
<div class="container">
    <Logo />
        <header>
        
        <h1>Portfolio of Products</h1>
        <NavBlue />
     
        </header>
       

    <main>
      <div ref='images' class="images" >

        <section class="web">
            <Panel  image='A18photo.jpg'
            @click="openA18Website()"
             />
            <Subnav 
            :panelTitle="A18Title" 
            :panelText="A18Text"
            :panelText2="A18Text2"
            @openWebsite="openA18Website()"
            @openGit="openA18Git()"
            />
        </section>

        <section class="web">
               <Panel image="flowerclub.jpg" 
               @click="openFlowerClubWebsite()"
               />
               <Subnav 
               :panelTitle='FCTitle'
               :panelText="FCText"
               :panelText2="FCText2" 
               @openWebsite="openFlowerClubWebsite()"
               @openGit="openFlowerClubGit()"
               />
        </section>

        <section class="web">
            <Panel :panelTitle = 'planner' image="Planner-wide2.jpg"  
            @click="openTodoWebsite()"
            />
            <Subnav 
            :panelTitle = 'todoTitle'
            :panelText = todoText
            :panelText2="todoText2" 
            @openWebsite="openTodoWebsite()"
            @openGit="openTodoGit()"/>
        </section>


        <section class="web">
            <Panel  image="Cavendish Cars.jpg"
            @click="ccarsWebsite()" 
            /> 
            <Subnav 
            :panelTitle = 'CCarsTitle'
            :panelText = 'CCarsText' 
            :panelText2= "CCarsText2"
            @openWebsite="openCCarsWebsite()" 
            @openGit="openCCarsGit()"/>
        </section>

        <section class="web">
            <Panel  image="Admaker2.jpg"/>
            <Subnav 
            :panelTitle = 'AdvertMakerTitle'
            :panelText = 'AdvertMakerText'
            :panelText2 = 'AdvertMakerText2'/>
        </section>

        <section class="web">
            <Panel image="portfolio23 page.jpg"/>
            <Subnav 
            :panelTitle = 'portTitle'
            :panelText = 'portText'
            :panelText2 = 'portText2'/>
        </section>
           
      </div>

      <!-- <div class="scroll-btns">
        <button @click="scrollUp">^^^</button>
        <button @click="scrollDown">vvv</button>
    </div> -->

    </main>
     
</div>
</transition>
</template>

<script setup>
import NavBlue  from '@/components/NavBlue.vue'
import Logo from '@/components/Logo.vue'

import Panel from '@/components/Panel.vue'
import Subnav from '@/components/Subnav.vue'

import { Alpha18Title, Alpha18Text, Alpha18Text2,flowerClubTitle, flowerClubText,flowerClubText2, plannerTitle,plannerText,plannerText2,
CavCarsTitle,CavCarsText, CavCarsText2,
adMakerTitle, adMakerText, adMakerText2,
portfolioTitle, portfolioText, portfolioText2} from "@/data/portfolioTexts.js"



const A18Title =Alpha18Title
const A18Text = Alpha18Text
const A18Text2 = Alpha18Text2

const FCTitle = flowerClubTitle
const FCText = flowerClubText
const FCText2 = flowerClubText2

const todoTitle = plannerTitle
const todoText = plannerText
const todoText2 = plannerText2

const CCarsTitle = CavCarsTitle
const CCarsText = CavCarsText
const CCarsText2 = CavCarsText2

const AdvertMakerTitle =adMakerTitle
const AdvertMakerText = adMakerText
const AdvertMakerText2 = adMakerText2

const portTitle = portfolioTitle
const portText = portfolioText
const portText2 = portfolioText2



function openA18Website(){
    window.open("https://g-universal.com/Alpha18/")
}

function openA18Git() {
      window.open("https://github.com/DanielStangar/Website-Alpha18cars");
    }

function openFlowerClubWebsite(){
    window.open("https://g-universal.com/Flowers%20Club/")
}

function openFlowerClubGit() {
    window.open("https://github.com/DanielStangar/Lingfield-Flowers-Club")
}

function openTodoWebsite(){
    window.open("https://g-universal.com/ToDo%201/")
}

function openTodoGit() {
    window.open("https://github.com/DanielStangar/Todo-Prototype-1")
}

function openCCarsWebsite() {
    window.open("https://ccars-v.netlify.app/")
}

function openCCarsGit() {
    window.open("https://github.com/DanielStangar/ccars-2.0")
}

</script>

<style scoped>

.logo {
    margin-top:4em;  
}


div.container {
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77);
    padding:1em 3em;
    margin:0;
}

header{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-evenly;
    margin-top:2em;
    margin-bottom: 2em;
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
    position:sticky;
    margin-left: 9em;;


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

main {

    padding:0.5em 1em;
    margin:1em ;
   
}

main > div.images {
    width:96%;
    overflow:auto;
    height:52em;
}

section.web{

    display:flex;
    flex-direction: row;
    padding:1em;
}

img {
    width:90%;
    border: 2px ridge antiquewhite;
    padding:0.5em;
    margin:1em;
}


::-webkit-scrollbar {
    width:.75em;
    
}

 div.images::-webkit-scrollbar-track{
    border-radius: 0.5em;
    border: 1px white ridge;
    margin-top: 3em;

}

div.container div.images::-webkit-scrollbar-thumb {
    background: antiquewhite;
    background: none;
  border-radius: 0.5em;
  border: 2px white ridge;
  width:5px;

  background-image: linear-gradient(#020d77,#020d77,#0356ce,antiquewhite,#0356ce,#020d77,#020d77);
}
  

.page-enter-from{
    opacity: 0;
  
  }
  .page-enter-to {
    opacity: 1;
  }
  .page-enter-active{
    transition: all 2s ease-in-out;
  }  
  

</style>