<template>
    <section class="panel">
        <img :src="getImageUrl()" id="image">
      
     
     </section>
</template>

<script setup>

const props = defineProps({
   
    image: String,

})

function getImageUrl(){
    return new URL(`../assets/${props.image}`, import.meta.url)
}

</script>

<style scoped>


img{
    width:96%;
    margin:0.5em auto;
    border: 2px groove antiquewhite;
    border-radius: 0.5em;
    padding:0.5em;
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
}
section.panel{
    display:flex;
    flex-direction: row;
    border: 2px groove antiquewhite;
    border-radius: 0.5em;
    color:antiquewhite;
    width:100em;
    margin:0.5em;
    padding:1.5em;
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77);
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
}





</style>