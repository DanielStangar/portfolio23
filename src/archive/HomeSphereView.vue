<template>
    <html>
    <Nav />
    <div class="background">
     
      <div class="small-container">
        <h3>Daniel Stangar</h3>
        <h4>Web Developer</h4>
        <p>Frontend & serverless backend solutions</p>
        <!-- <p>HTML, CSS, Javascript, Vue JS, Firebase</p> -->
  
      </div> 
  
     
      <img id="stack-logos" src="../assets/Port2stack.jpg" alt="web stack logos">
      
  
      <!-- <div class="container">
        <h1>Web Presentation Tailor Made to Your Needs</h1>
        <p>Attract customers from their computers, smartphones, laptops and tablets.</p>
        <p>Tell people your message.</p>
        <p>Stand out of the crowd.</p>
        <p>Explain quality and benefits of your services.</p>
        <p>Click on the portfolio button to see how your website can look like.</p>
      </div> -->
  
     
  
   
  
  
    </div>
    </html>
  </template>
  
  <script setup>
  import Nav from '@/components/Nav.vue'
  
  </script>
  
  <style scoped>
  
  html{
    background-color: rgb(21, 19, 19);
  }
  
  div.background{
    background-image: url('../assets/sphere.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  div.container{
   
    border-radius: 0.5em;
    height:20em;
    padding:2em;
    margin-left: 35em;
    margin-top: 5em;
    margin-right: 2em;
    box-shadow: 10px 10px 25px rgb(72, 74, 75);
    background-image: linear-gradient(rgb(228, 76, 61), rgb(255,198,55));
    background-image: linear-gradient(red, yellow)
  
  }
  
  
  
  
  div.small-container{
    margin-top: 2em;
    margin-right: 2em;
   
   border-radius: 0.5em;
    width:17em;
    padding:1em;
    float:right;
  
    opacity:0.9;
  
    background-image: linear-gradient(rgb(215,233,21),rgb(176, 32, 13),rgb(45,23,37),rgb(66, 77, 22), rgb(174,173,212));
    box-shadow: 10px 10px 25px rgb(72, 74, 75);
  
  }
  
   div.small-container >h3, div.small-container >h4 {
    color:red;
    color:blanchedalmond;
    margin:0em;
  }
  div.small-container > p{
    color:rgb(28, 28, 179);
    color:rgb(237, 162, 22);
    color:blanchedalmond;
    margin-top:1em;
    
  }
  
  h1 {
    color:bisque;
    text-shadow: 10px 6px 15px rgb(57, 50, 20);
  }
  
  p, h3, h4 { 
    color: rgb(19, 6, 107);
    font-size: 1.2rem;
    font-weight:500;
    text-shadow: 10px 3px 12px rgb(119, 108, 60);
  
  }
  
  img{ 
    width: 17em;
  
    margin-left:68em;
    margin-top:22em;
    margin-bottom:7em;
    padding:1em;
    border-radius: 0.7em;
    background-color: blanchedalmond;
    box-shadow: 10px 10px 15px rgb(99, 111, 115);
   opacity:0.8;
  }
  
  </style>
  