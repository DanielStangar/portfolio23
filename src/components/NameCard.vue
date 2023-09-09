<template>
    <div class="name-card">
        <h1>Daniel Stangar</h1>
        <h2>Web Developer</h2>
       
      </div>
</template>

<script setup>

</script>

<style scoped>
.name-card {
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
  .name-card h2, h1{
    font-weight: 300;
    text-align: center;
    margin-top:0.75em;
    margin-bottom: 1.5em;
  }
  
  .name-card button{
    color:#FECA4B;
    border: 2px ridge #FECA4B;
    background: transparent;
    width:12em;
    align-self: center;
    margin-top:0 auto;
   border-radius: 0.5em;
   padding:0.5em 2em;
  }
  

</style>