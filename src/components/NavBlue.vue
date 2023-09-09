<template>
    <nav>
   <router-link to="/">Home</router-link> 
   <router-link to="/about">About</router-link>
   <router-link to="/portfolio">Portfolio</router-link>
   <router-link to="/contact">Contact</router-link>

 </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
 padding: 1em;
 display:flex;
 flex-direction:column;
 border-radius:1em;
 justify-content: space-evenly;
 align-items:flex-end;
 border: 2px ridge antiquewhite;
 float: right;
 margin-right:3em;
 margin-top:-2em;
  box-shadow: 10px 10px 35px rgb(37, 38, 39);

}

nav a {

 font-weight: 500;
 color:antiquewhite;
 background-color: transparent;
 font-size:1.25rem;
 text-decoration:none;
 text-align:center;
 border: 2px ridge antiquewhite;

 border-radius: 0.75em;
 padding:0.25em;
 margin: 0.25em;
 margin-right:0.5em;
 width:6em;

 text-shadow: 5px 3px 20px rgb(243, 242, 238);

}

nav a.router-link-exact-active {
 color:antiquewhite;
 background-color:#bf3104;
 text-shadow: 5px 3px 30px rgb(244, 244, 243);

 
 opacity:1;
font-weight: 500;
border: 3px outset antiquewhite;
text-align: center;
}

nav a:hover {
 color:#bf3104;
}

nav a:hover.router-link-exact-active{
 color:#f1f2d5;
}

</style>