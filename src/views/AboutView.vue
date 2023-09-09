<template>
 
  <div class="about">
    <transition name="page" appear>
    <Logo />
    </transition>
    <NavBlue /> 

<transition name="page" appear>
<main>
    <div class="left-side">
    <NameCard  />


    <section class="download">
      <h3> For recruiters and HR managers  </h3>
      <a href="CVdownload.html" >Download my CV</a>
    </section>

    <section class="certificates">
      <h3 > My coding certificates  </h3>
      <button @click="openCerts">Display Certificates</button> 
    </section>

    <section class="texts">
      <h3> Briefly about myself  </h3>
      <button @click="openAboutMe"> Read More</button> 
    </section>
  </div>

 <div class="right-side">

  <transition name="fade">
  <AboutText v-show="briefly"/>
</transition>

<transition name="fade">
  <AboutCerts v-show="certs"/>
</transition>

 </div>

   
  </main>
</transition>
  </div>
</template>

<script setup>
import NavBlue from '@/components/NavBlue.vue'
import NameCard from '@/components/NameCard.vue'
import AboutCerts from '@/components/AboutCerts.vue'
import AboutText from '@/components/AboutText.vue'
import Logo from '@/components/Logo.vue'
import { useRouter} from 'vue-router'

const router = useRouter()

import {ref } from 'vue'

let briefly = ref(true)
let certs = ref(false)

function openAboutMe(){
  console.log("openAboutMe")
  briefly.value = true
  certs.value = false
}

function openCerts(){
  console.log("openCerts")
  certs.value = true
  briefly.value = false
}


</script>
<style scoped>
.logo {
  margin:0.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

main{
  display:flex;
  flex-direction:row;

}
.about {
  padding:4em 2em;
  border-radius: 0.75em;
  margin:2em;
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
  height: 80vh;
}

.left-side {
  margin-top:5em;
}

.download, .certificates, .texts {
  margin:2em;
  
  padding:1em;
  border: 2px ridge #FECA4B;
  border-radius:0.75em;
  width:90%;
  color:#FECA4B;
  background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77);
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
   text-shadow: 2px 2px 5px rgb(177, 174, 154);
   text-shadow: 2px 2px 5px rgb(31, 30, 27);
   display:flex;
   flex-direction: column;
}




.download h3, .texts h3, .certificates h3{
  font-weight: 400;
  text-align: center;
  margin-top:0.35em;
  margin-bottom: 1em.75em;
}

.download button, .download a, .texts button, .certificates button{
  color:#FECA4B;
  border: 2px ridge #FECA4B;
  background: transparent;
  max-width:70%;
  align-self: center;
  margin-top:0 auto;
 border-radius: 0.5em;
 padding:0.5em 2em;
}

button:hover, a:hover {
  color:white;
  cursor:grab;
}

.download a {
  text-decoration:none;
}

.right-side{
  padding:0.5em;
  border-radius: 0.5em;
  margin-left:7em;
  max-height:50em;
  overflow-y: auto;
  opacity:0.9; 
}

::-webkit-scrollbar {
  width:.75em;
  
}

div.right-side::-webkit-scrollbar-track{
  border-radius: 0.5em;
  border: 1px white ridge;
  margin-top: 1em;

}

div.right-side::-webkit-scrollbar-thumb {
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
