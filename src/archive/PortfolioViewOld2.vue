<template>
    <div class="container">
        
            <header>
            <h1>Products will tell you the truth</h1>
            <NavBlue />
            </header>
    
    
        <main>
          <div class="images">
                <img src="@/assets/A18photo.jpg" >
                <img src="@/assets/flowerclub.jpg">
                <img src="@/assets/Planner-wide2.jpg">
                <img src="@/assets/Cavendish Cars.jpg">
                <img src="@/assets/Admaker2.jpg">
                <img src="@/assets/portfolio23 page.jpg">
          </div>
    
          <aside>
            <Subnav />
          </aside>
        </main>
         
    </div>
    </template>
    
    <script setup>
    import NavBlue  from '@/components/NavBlue.vue'
    import Subnav from '@/components/Subnav.vue'
    import { ref } from 'vue'
    
    const headers = ['Small taxi business', 'Club of flower arrangers', 'Planner for forgetful managers', 'Another taxi business', 'Adverts Maker', 'This portfolio website']
    
    
    
    
    
    
    
    
    </script>
    
    <style scoped>
    
    
    div.container {
        background-image: linear-gradient(#020d77,#020d77,#0356ce,#dfe7ed,#0356ce,#020d77,#020d77);
        padding:1em;
        margin:0;
    }
    
    header{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content: space-evenly;
        margin-top:2em;
        margin-bottom: 5em;
        box-shadow: 10px 10px 35px rgb(37, 38, 39);
        position:sticky;
        top:3em;
    
    
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
        display:flex;
        flex-direction:row;
        padding:1em 3em;
        margin:1em;
       
    }
    
    main > div.images {
        width:65%;
        overflow-y:scroll;
        height:52em;
    }
    
    img {
        width:90%;
        border: 2px ridge antiquewhite;
        padding:0.5em;
        margin:1em;
    }
    
    main > aside {
        position:sticky;
        top:15em;
        width:35%;
        border: 2px ridge antiquewhite;
        padding:1em;
        margin:1em;
        height: 40em;
        background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77);
    }
    
    ::-webkit-scrollbar {
        width:1.5em;
        
    }
    
     div.images::-webkit-scrollbar-track{
        border-radius: 0.5em;
        border: 1px white ridge;
        margin-top: 1em;
    
    }
    
    div.container div.images::-webkit-scrollbar-thumb {
        background: antiquewhite;
        background: none;
      border-radius: 0.5em;
      border: 2px white ridge;
      width:10px;
    
      background-image: linear-gradient(#020d77,#020d77,#0356ce,antiquewhite,#0356ce,#020d77,#020d77);
      
      
      
    
     
        
        
      }
    
    </style>