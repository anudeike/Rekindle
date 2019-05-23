<template>
  <div class="home">
    <navbar/>
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
  methods:{
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
        alert("you have been logged out");
      });
    }
  }
};
</script>
