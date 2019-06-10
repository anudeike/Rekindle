<template>
  <div class="home">
    <navbar/>
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <dashboard :email="currentUserEmail"/>
    <b-button @click="getName">get the current user</b-button>
    <button @click="false_logout">Logout</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import firebase from 'firebase'

export default {
  name: "home",
  components: {
    Dashboard,
    HelloWorld,
    navbar
  },
  data(){
    return {
      currentUserEmail: 'null'
    }
  },
  methods:{
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
        alert("you have been logged out");
      });
    },
    getName: function () {
      var user = firebase.auth().currentUser;

      if(user != null){
        this.currentUserEmail = user.email;
        console.log(user.email);
        return user.email;
      }else{
        console.log("null");
        return "null";
      }

    },
    false_logout: function () {
      alert("you have been logged out: {false logout function}");
      this.$router.replace('login')
    },
    goToNewStory: function(){
      alert("creating new story");
      this.$router.replace('new');
    }
  },
  created() {
    var user = firebase.auth().currentUser;

    if(user != null){
      this.currentUserEmail = user.email;
      console.log(user.email);
      return user.email;
    }else{
      console.log("null");
      return "null";
    }
  }
};
</script>

<style scoped>
  .nav-items{
    color: whitesmoke;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  .navigation-bar{
    background-color: #2B2B2B;
  }

  .new-btn{
    font-family: Roboto, sans-serif;
    font-weight: lighter;
    background-color: #954DFF;
    color: whitesmoke;
    padding: 10px 40px 10px 40px;
    border-radius: 5px;
    outline: none;
  }

  .new-btn:hover{
    background-color: #7f43d8;
  }

  .new-btn:active{
    background-color: #6d39ba;
  }
</style>
