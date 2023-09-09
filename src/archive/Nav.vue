<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>

nav {
    padding:1em;
    margin-left:1em;
    margin-top:1em;
    display:flex;
    flex-direction:column;
    width:12em;
    float:left;
   background-image: linear-gradient(rgb(215,233,21),rgb(176, 32, 13),rgb(45,23,37),rgb(66, 77, 22), rgb(174,173,212));
    opacity:0.9;
    border-radius: 0.5em;
    box-shadow: 5px 5px 25px rgb(128, 136, 139);
    justify-content: center;
    align-content: center;
}

a {
    padding:0.25em 1em;
    margin: 0.5em;
    border: 2px ridge rgb(31, 87, 53);
    border: 2px ridge rgb(228, 76, 61);
    border:2px ridge blanchedalmond;
    
    border-radius: 0.5em;
    text-decoration: none;
    color:rgb(31, 87, 53);
    color:rgb(228,76,61);
    color:blanchedalmond;
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: 18px 15px 35px rgb(128, 136, 139);
    text-shadow: 10px 6px 10px rgb(162, 165, 160);

    align-items: center;
    justify-content: center;
}

</style>