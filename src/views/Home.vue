<template>
  <div class="home">
    <b-navbar class="navigation-bar" dark>
      <b-navbar-brand href="#">Rekindle </b-navbar-brand>

      <!--not entirely sure what a b-collapse is-->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><span class="nav-items">home</span></b-nav-item>
          <b-nav-item href="#"><span class="nav-items">browse</span></b-nav-item>
          <b-nav-item href="#"><span class="nav-items">random</span></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item><span>{{ currentUserEmail }}</span></b-nav-item>
          <button class="new-btn">new story</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="logout">Logout</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import navbar from "../components/navbar";
import firebase from 'firebase'

export default {
  name: "home",
  components: {
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
