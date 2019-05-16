<template>
  <div class="about">
    <div id="picture input">

    </div>
    <!--contains the main content that the user will type and submit their stuff into-->
   <b-container>

     <!--must keep stuff in a row-->
     <b-row>

       <!--this is the content side-->
       <b-col>
         <b-card bg-variant="dark">
           <div id="content">

             <b-form-input id="title" size="lg" v-model="post.title" required placeholder="a creative title"></b-form-input>

             <b-form-textarea id="textarea" size="lg" v-model="post.content" placeholder="start your story here"></b-form-textarea>
           </div>
         </b-card>
       </b-col>

       <!--this is the preview side-->
       <!--<b-col>-->
         <!--<b-card>-->
           <!--<b-card-title> {{ post.title }}</b-card-title>-->
           <!--<b-card-text> {{ post.content }}</b-card-text>-->
         <!--</b-card>-->
       <!--</b-col>-->

     </b-row>
   </b-container>
  </div>
</template>

<style scoped>
  #textarea{
    border: none;
    border-radius: 0;
    background-color: #343a40;
  }

  #title{
    border: none;
    border-radius: 0;
    background-color: #343a40;
  }

  b-card{
    background-color: #343a40;
    border: none;
  }
</style>

<script>
  export default{
    //name: newStory,
    data () {
      return {
        post: {
          title: "",
          content: ""
        }
      }
    }

  }
</script>

