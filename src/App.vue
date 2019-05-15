<template>
  <div id="app">
    <div id="nav">

      <!--navbar-->
      <b-navbar variant="primary" dark>
        <b-navbar-brand href="#">Rekindle </b-navbar-brand>

        <!--not entirely sure what a b-collapse is-->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" class="nav-items">home</b-nav-item>
            <b-nav-item href="#" class="nav-items">browse</b-nav-item>
            <b-nav-item href="#" class="nav-items">random</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">User</template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!--leave as an example as to how to route stuff-->
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
  background-color: antiquewhite;
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
