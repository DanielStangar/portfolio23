<template>
    <div class="subnav">
        <h2 ref="websiteTitle">{{ props.panelTitle}}</h2>
        <!-- <button>Description</button> -->
       <button @click="showWebsite">Demo</button>
       <button @click="showGit">Code</button>

       <div class="btns-instructions">
        <p>{{props.panelText}}</p>
      <p>{{props.panelText2}}</p>
      <p>You can try the actual website live on you device using the button DEMO or see the the underlying code on GitHub by pressing CODE.</p>
    
    </div>
       
    </div>
</template>

<script setup>

const emit = defineEmits(['openWebsite', 'openGit'])

const showWebsite = () =>{
    emit('openWebsite')
}

const showGit = () => {
    emit('openGit')
}

const props = defineProps({
   
    panelTitle: String,
    panelText: String,
    panelText2: String,

})

</script>

<style scoped>
.subnav{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-left: 2em;
    border: 2px ridge antiquewhite;
    border-radius: 0.5em;
    padding:1em;
    background-image: linear-gradient(#020d77,#020d77,#0356ce,#020d77,#020d77);
    width:55%;
   
}
h2{
    color:antiquewhite;
    font-weight: 400;
    text-shadow: 5px 3px 10px rgb(45, 40, 5);
    color:#FECA4B;
}

div.subnav button{

    font-weight: 500;
    color:antiquewhite;
    color:#FECA4B;
    background-color: transparent;
    font-size:1.15rem;
    text-decoration:none;
    text-align:center;
    border: 2px ridge antiquewhite;
   
    border-radius: 0.75em;
    padding:0.35em 1.75em;
    margin: 0.5em;
    margin-right:0.5em;
    width:10em;
   
    text-shadow: 5px 3px 20px rgb(243, 242, 238);
    box-shadow: 10px 10px 35px rgb(37, 38, 39);
   }

   .subnav >button:hover {
    color:white;
    cursor:grab;
  }


   div.btns-instructions{
    display:flex;
    flex-direction:column;
   color:antiquewhite;
   color:#FECA4B;
   border: 2px ridge antiquewhite;
   margin-top: 2em;
   border-radius: 0.5em;

}

   div.btns-instructions p {
    padding:0em 1.5em;
    color:#FECA4B;
   }
</style>