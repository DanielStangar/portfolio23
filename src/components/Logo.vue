<template>
    <div class="logo" @click="returnHome">
        <img src="@/assets/GUlogo2.png" class="logo"/>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router'

const router = useRouter()

function returnHome(){
    console.log("Home")
  router.push('/')
}

</script>


<style scoped>
img.logo{
    width:7em;
    height:7em;
    box-shadow: none;
    border-radius: 0.5em;
    border: 2px ridge #FECA4B;
    position: absolute;
    margin-top: -3em;
    background-image: linear-gradient(#0356ce,#dfe7ed,#0356ce);
   padding:0.4em;
   box-shadow: 10px 10px 35px rgb(51, 54, 55);
  }

img.logo:hover {

    cursor:grab;
    box-shadow: none;
  }

</style>