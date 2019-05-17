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
             <b-card img-src="https://via.placeholder.com/1080x100" v-if="!cover" bg-variant="dark">

               <div id="content">

                 <b-form-input id="title" size="lg" v-model="post.title" required placeholder="a creative title" ></b-form-input>

                 <b-form-textarea id="textarea" size="lg" v-model="post.content" placeholder="start your story here"></b-form-textarea>
               </div>
             </b-card>
             <b-card :img-src="cover.imageURL" v-else bg-variant="dark">

               <div id="content">

                 <b-form-input id="title" size="lg" v-model="post.title" required placeholder="a creative title" ></b-form-input>

                 <b-form-textarea id="textarea" size="lg" v-model="post.content" placeholder="start your story here"></b-form-textarea>
               </div>
             </b-card>
             <!--<b-img src="https://via.placeholder.com/1080x100" size="150px" v-if="!cover" class="grey lighten-3 mb-3">-->
               <!--<span>Click to add avatar</span>-->
             <!--</b-img>-->
             <!--<b-img :src="cover.imageURL" v-else class="grey lighten-3 mb-3">-->
               <!--<span>Click to add avatar</span>-->
             <!--</b-img>-->
             <!--<v-avatar size="150px" v-else class="mb-3">-->
             <!--<img :src="cover.imageURL" alt="avatar">-->
             <!--</v-avatar>-->
           </div>
         </image-input>
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
    border: none;
  }
</style>

<script>
  import ImageInput from '../components/image-upload.vue'
  export default{
    name: 'newStory',
    data () {
      return {
        cover: null,
        saving: false,
        saved: false,
        post: {
          title: "",
          content: ""
        }
      }
    },
    components: {
      ImageInput: ImageInput,
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
      }
    }

  }
</script>

