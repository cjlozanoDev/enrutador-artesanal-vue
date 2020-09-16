<template>
  <div id="app">
    <AppHeader/>
    <RouterView/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import RouterView from './components/RouterView.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    RouterView
  },
  methods: {
    selectView(nameView) {
      this.selectedView = nameView
    }
  }
}
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
  }

  html,
  body {
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
