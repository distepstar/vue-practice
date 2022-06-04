<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <!-- it will match the name of your router name in routes -->
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      // redirect to the home component
      this.$router.push({ name: 'home' });
    },
    back() {
      // get router !== get route
      // go back history (Chorme back page button)
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
