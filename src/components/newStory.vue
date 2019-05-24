<template>
  <div class="about">
    <!--contains the main content that the user will type and submit their stuff into-->
   <b-container>

     <!--must keep stuff in a row-->
     <b-row>

       <!--this is the content side-->
       <b-col>
         <image-input v-model="cover">
           <div slot="activator">
             <b-img src="https://via.placeholder.com/1080x100" size="150px" v-if="!cover" class="grey lighten-3 mb-3">
               <span>Click to add avatar</span>
             </b-img>
             <!--<b-img :src="cover.imageURL" v-else class="grey lighten-3 mb-3">-->
               <!--<span>Click to add avatar</span>-->
             <!--</b-img>-->
             <b-button block variant="dark" v-if="cover" style="margin: 20px 0px 20px 0px;">Choose Another File</b-button>


           </div>
         </image-input>
         <b-card :img-src="cover.imageURL" v-if="cover" bg-variant="dark">

           <div id="content">

             <b-form-input id="title" size="lg" v-model="story.title" required placeholder="a creative title" ></b-form-input>

             <b-form-textarea id="textarea" size="lg" v-model="story.content" placeholder="start your story here"></b-form-textarea>
           </div>
         </b-card>
         <b-card v-else  bg-variant="dark">

          <div id="content">

            <b-form-input id="title" size="lg" v-model="story.title" required placeholder="a creative title" ></b-form-input>

            <b-form-textarea id="textarea" size="lg" v-model="story.content" placeholder="start your story here"></b-form-textarea>
          </div>
        </b-card>
       </b-col>


     </b-row>
     <b-button @click="postToDatabase()" style="margin-top: 25px;" v-if="cover"> SUBMIT </b-button>
   </b-container>
  </div>
</template>

<style scoped>
  #textarea{
    border: none;
    border-radius: 0;
    background-color: #343a40;
    color: whitesmoke;
    font-family: "Gravity", "SansSerif", "Roboto", SansSerif, serif;
    font-size: 18px;
    box-shadow: none;
  }

  #title{
    border: none;
    border-radius: 0;
    background-color: #343a40;
    color: whitesmoke;
    font-size: 24px;

    /*gets rid of the annoying glow*/
    box-shadow: none;
  }

  b-card{
    background-color: transparent;
  }
</style>

<script>
  import ImageInput from './image-upload.vue'
  import navbar from "./navbar";
  export default{
    name: 'newStory',
    data () {
      return {
        submitted: false,
        cover: null,
        saving: false,
        saved: false,
        story: {
          title: "",
          content: "",
          img: this.cover
        }
      }
    },
    components: {
      ImageInput: ImageInput,
      navbar: navbar
    },
    watch: {
      cover: {
        handler: function () {
          this.saved = false;
        },
        deep: true
      }
    },

    methods: {
      uploadImage() {
        this.saving = true;
        setTimeout(() => this.savedAvatar(), 1000);
      },
      savedAvatar() {
        this.saving = false;
        this.saved = true;
      },
      postToDatabase: function () {
        this.$http.post('https://rekindle-f3fdc.firebaseio.com/posts.json', this.story).then(function(data){
          this.submitted = true;
        });
      }
    }

  }
</script>

