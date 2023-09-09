<template>
  <header>
    <NavBlue />
  </header>

  <transition name="page" appear>

  <div class="container">

  
   <Logo />
   

    <div class="left-column">
      <div class="name-card">
        <h1>Daniel Stangar</h1>
        <h2>Web Developer</h2>
        <button @click="goToAboutPage()">More about me</button>
      </div>
  
      <img id="stack-logos" src="../assets/Port2stack.jpg" alt="web stack logos">
    </div>


  <div class="right-column">
    <div class="second-card">
    
      <h3>new websites tailor made to your specifications</h3>
      <h3>fine tuning and update of existing websites</h3>

      <h3>frontend & serverless backend</h3>

      <button @click="goToPortfolioPage()"> See my works here </button>

     
  
    </div>
    
   
 
  </div>



  
  </div>
</transition>
</template>

<script setup>
import NavBlue from '@/components/NavBlue.vue'
import Logo from '@/components/Logo.vue'
import { useRouter} from 'vue-router'


const router = useRouter()

function goToAboutPage(){
  router.push('/about')
}

function goToPortfolioPage(){
  router.push('/portfolio')
}

</script>

<style scoped>
header {
 position:absolute;
 margin-top:3em;
 margin-left:88em;
}

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

div.container{
  padding:4em 2em;
  display:flex;
  flex-direction:row;
  border-radius: 0.75em;
  margin:3em;
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
  height: 80vh;


}


div.left-column {
  width:50%;
}
.name-card {
  margin:2em;
  margin-top: 8em;
  margin-left:10em;
  padding:1em;
  border: 2px ridge #FECA4B;
  border-radius:0.75em;
  width:55%;
  color:#FECA4B;
  background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77,#020d77);
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
  margin-bottom: 1.75em;
}

.name-card button {
  color:#FECA4B;
  border: 2px ridge #FECA4B;
  background: transparent;
  width:12em;
  align-self: center;
  margin-top:0 auto;
 border-radius: 0.5em;
 padding:0.5em 2em;
}


img#stack-logos{ 
  width: 30%;
  margin-top: 10em;
  margin-left: 16em;
  margin-right:-3em;
  padding:0.75em;
 
  border-radius:0.75em;
  box-shadow: 10px 10px 35px rgb(51, 54, 55);

}

div.right-column{
  width:45%;
}


.second-card {
  display:flex;
  flex-direction: column;
  margin:1em 3em;
  margin-top: 19em;
  margin-right: 18em;
  width:70%;
  padding:2em 1em;
  border: 2px ridge #FECA4B;
  border-radius:0.75em;
  color:#FECA4B;
  background-image: linear-gradient(#020d77,#0356ce,#dfe7ed);
  background:transparent;
  background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77,#020d77);
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
   text-shadow: 2px 2px 5px rgb(55, 55, 50);
}

.second-card h3, .third-card h3{
  font-weight:400;
  font-size: 1.3rem;
  text-align: center;
}


.second-card button {
  color:antiquewhite;
  color:#FECA4B;

  background-color: #bf3104;
  background-color: transparent;
  font-size: 1.2rem;
  border: 2px ridge antiquewhite;
  border: 2px ridge #FECA4B;

  width:14em;
  align-self: center;
  margin-top:2em;
 border-radius: 0.5em;
 padding:0.5em 2em;

}

button:hover {
  color:white;
  cursor:grab;
}

div.container > header {
  width:20%;
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