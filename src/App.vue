<template>
  <div id="app">
  <a id="c-1" href="#" @click="counter += 1">1</a>
  <a id="c-2" href="#" @click="counter += 2">2</a>
  <a id="c-2" href="#" @click="hello1()">3</a>
  <p>{{counter}}</p>
  <router-link v-bind:to="'/'">Home</router-link>
  <router-link v-bind:to="'/about'">About</router-link>
  <router-link v-bind:to="'/register'">Register</router-link>
  <!-- the router outlet, where all matched components would ber viewed -->
  <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      counter : 0,
      vie: "hello"
    }
  },
  methods: {
    hello1() {
      alert("hello world");
    }
  }
}
</script>

<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>