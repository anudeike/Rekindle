<template>
  <div id="app">
    <div id="nav">

      <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <!--normally the logo would go here-->
        <v-toolbar-title class="logo">Rekindle</v-toolbar-title>

        <v-toolbar-title>home</v-toolbar-title>
        <v-toolbar-title>browse</v-toolbar-title>
        <v-toolbar-title>random</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-toolbar-title>ikechukwu</v-toolbar-title>
        <v-btn round color="primary" dark> new </v-btn>

      </v-toolbar>

      <router-link to="/">Home</router-link> |
      <router-link to="/new">New</router-link>



    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo {
  font-family: "SF Pro Display", sans-serif;
}

</style>
