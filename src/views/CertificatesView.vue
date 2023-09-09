<template>
    <div class="container">
        <NavBlue />

        <div class="images">

        <img src="@/assets/certificates/python-cert.png" />

        <img src="@/assets/certificates/html5-cert.png" />
        
        <img src="@/assets/certificates/css3-cert.png" />

        <img src="@/assets/certificates/js-cert.png" />

        <img src="@/assets/certificates/Vue3-compAPI-cert.jpeg" />

        <img src="@/assets/certificates/vue3-animation-cert.png" />

        <img src="@/assets/certificates/vue3-pinia-cert.png" />

        <img src="@/assets/certificates/Firabase9-cert.png" />
    </div>
  
    </div>
</template>

<script setup>
import NavBlue from '@/components/NavBlue.vue'

</script>

<style scoped>

.container {
    padding:5em;
}

.images {
    width:80%;
}

.images img {
    width:22em;
    margin:0.5em 1em;
    border:#feca4b 3px ridge;
    height: 14em;
    padding:0.5em;
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77);
}

</style>