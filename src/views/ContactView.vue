<template>

    <div class='contact-container'>
      <transition name="page" appear>
      <Logo />
      </transition>
      <NavBlue />
      
      <transition name="page" appear>
        <div class="content">

   
            <section class="form">
              <h3>Contact Form</h3>
              <form action="https://formsubmit.co/dstangar@gmail.com" method="POST">
                <label name="label-name">Your name:</label>
                <input type="text" name="text"/>
                <label name="label-email">Email:</label>
                <input type="email" name="email"/>
                <label name="message">Your Message</label>
                <textarea rows="15" name="textarea"></textarea>
                <input id="sendBtn" type="submit" name="submit" value="Send" />
              </form>
            </section>


            <section class="contact-details">
              <h3>Other ways of contacting:</h3>
              <h5>dstangar@gmail.com</h5>
              <h5>+44 7547 277 299</h5>
              <br />
              <hr />
              <br />
              <h3>Postal address:</h3>
              <h6>Daniel Stangar</h6>
              <h6>7 Dorset Gardens</h6>
              <h6>East Grinstead, Rh19 2SD, West Sussex, United Kingdom</h6>
            </section>
       
          </div>
        </transition>
      </div>

        
            
  
</template>

<script setup>
import NavBlue  from '@/components/NavBlue.vue'
import Logo from '@/components/Logo.vue'

</script>

<style scoped>
.logo {
  margin:2em;
}

.contact-container {
  padding-top:3em;
  margin:1em;
  margin-top:2em;
  border-radius: 0.75em;
  margin:2em;
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
  height: 90vh;

}

.contact-container > h1 {
  margin:2em;
  margin-top: 1em;
  font-weight: 400;
  text-align: center;
}

.content {
  display:flex;
  flex-direction:row;
  margin-top: 2em;
  padding:3em;
}


.contact-details hr {
  border-top: 2px ridge #FECA4B;
  border-bottom: none;
  border-right:none;
  box-shadow: 10px 10px 12px rgb(52, 54, 55);
}

.contact-details, .form, h1{
  margin:3em;
  padding:1em;
  border: 2px ridge #FECA4B;
  border-radius:0.75em;
  width:35%;
  color:#FECA4B;
  background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77);
  box-shadow: 10px 10px 35px rgb(51, 54, 55);
   text-shadow: 2px 2px 5px rgb(177, 174, 154);
   text-shadow: 2px 2px 5px rgb(31, 30, 27);
   
}

section.contact-details {
  padding:3em;
  margin-top:10em;
  margin-left:15em;
  max-width:30%;
  height:15%;
}

section.contact-details > h5,h6{
  font-size:1.1rem;
  font-weight: 300;
  text-shadow: 2px 2px 5px rgb(31, 30, 27);
  margin:0;
}



section.form{
  display:flex;
  flex-direction:column;
  padding:2em;
  margin-top: 4em;
  margin-left:7em;
  
}

section.form >h3 {
  font-weight: 400;
  font-size: 1.4rem;
  margin-top: 0;
  text-align: center;
  text-shadow: 2px 2px 10px rgb(9, 9, 9);
}

section.form > form {
  display:flex;
  flex-direction:column;
  font-size: 1.2rem;
  text-shadow: 2px 2px 10px rgb(9, 9, 9);
}

section.form > form > input, textarea {
  padding: 0.5em;
  background-color:rgb(231,232,236) ;
  background-image: linear-gradient(rgb(231,232,236),rgb(209,208,205));
  font-size: 1.1rem;
}

section.form >form > #sendBtn {
  border:#FECA4B 2px ridge;
  color:#FECA4B;
  border-radius: 0.5em;
  margin:0.75em;
  padding:0.5em;
  text-align:center;
  text-shadow: 2px 2px 10px rgb(9, 9, 9);
  background-image: linear-gradient(#020d77,#020d77,#0356ce,#0356ce,#020d77,#020d77);
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