<template>
  <div class="modal" >
    <img src="@/assets/002copy-small.jpg" >
    <h4>Briefly About Myself</h4>
    <p class="modal">
      Instead of trying to impress you I would like to present here
      some realistic information about myself and answer the questions of who am I and what can I do for you. 
    </p>
    <p class="modal">
      Although I have been using computers whole my life, as a system administrator in
      bank, translator, etc., I have seriously started to learn coding on spring 2020
      during the first lockdown. I was 54, it wasn't easy, but also not super difficult. My ability to study literally anything that I had built up as a translator helped me a lot. 
      Ten month later my son was born and in spite of all the
      happiness and hard work it involves, I have kept studying and practicing coding, while
      keeping also my taxi business as the main income source. 
    </p>
    <p class="modal">
      The real test of any type of knowledge
     knowledge is practice. So I kept building websites and applications and was able to
      see the results of my work straight away. Experienced coders heavily recommended this approach too. The further I progressed, the more more
      problems I was able to solve. Apart from other works I have done, three of my websites are live and work for actual
      businesses.
    </p>
    <p class="modal">
      Nowadays it seems that my results in front end development and connecting it to a database are satisfactory. I can build workable website from scratch or do modifications and improvements of some existing website. 
    </p>
    <p class="modal">
      At this stage, some king of trial seems to me best way forward. Therefore I am looking for a form of apprenticeship, or working part time for just a symbolical reward. I am happy to do some smaller tasks at first to see if I am
      able to help effectively. That I can do from home. My life
      is organized in such a way that I can deliver about 15-20 hours per week.
    </p>
    <p class="modal">
      Please, take a look at my portfolio and see for yourself whether you like my work.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";


</script>

<style scoped>
div.modal {
  color: #020d77;
  background-color: #dfe7ed;
  padding: 1em 2em;
  border-radius: 0.75em;
  overflow: auto;
  width: 38em;
  box-shadow: 10px 10px 15px rgb(51, 54, 55);
}

div.modal > h4 {
  font-size:1.3rem;
  
 
}
div.modal > p {

  font-size:1.15rem;
}

div.modal > img {
  width:5em;
  height:7em;
  float: right;
  border-radius: 0.5em;
  margin:0.2em;
  box-shadow: 3px 3px 5px rgb(51, 54, 55);
}


::-webkit-scrollbar {
  width: 0.75em;
}

div.modal::-webkit-scrollbar-track {
  border-radius: 0.5em;
  border: 1px white ridge;
  margin-top: 3em;
}

div.modal::-webkit-scrollbar-thumb {
  background: #f0f2f4;
  background: none;
  border-radius: 0.5em;
  border: 2px white ridge;
  width: 5px;

  background-image: linear-gradient(
    #020d77,
    #020d77,
    #0356ce,
    antiquewhite,
    #0356ce,
    #020d77,
    #020d77
  );
}
</style>
