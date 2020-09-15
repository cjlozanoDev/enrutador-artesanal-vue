<template>
  <div id="app">
    <AppHeader
      @select-view="selectView" />
    <component :is="selectedView"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import UserList from './views/UserList'
import Contact from './views/Contact'
import Legal from './views/Legal'

export default {
  name: 'App',
  components: {
    AppHeader,
    UserList,
    Contact,
    Legal
  },
  data() {
    return {
      selectedView: 'UserList'
    }
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
