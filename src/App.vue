<template>
  <div id="app">
    <div id="nav">

      <!--navbar-->


      <!--&lt;!&ndash;leave as an example as to how to route stuff&ndash;&gt;-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/new">New</router-link>-->





    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  background-color: #343a40;
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-items {
  font-family: "SF Pro Text thin", Roboto, serif;
  font-size: 20px;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo {
  font-family: "SF Pro Display", sans-serif;
}

#newLink{
  text-decoration: none;
}


</style>
