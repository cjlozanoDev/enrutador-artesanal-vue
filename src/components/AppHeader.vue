<template>
  <div class="app-header">
     <div class="app-header__title">
       <h2>User directory</h2> 
     </div>
     <div class="app-header__nav">
      <RouterLink 
        name='Directory'
        dest='/'/>
      <RouterLink 
        name='Contact'
        dest='/contact'/>
      <RouterLink 
        name='Legal'
        dest='/legal'/>
     </div>
  </div>
</template>

<script>
import RouterLink from './RouterLink'

export default {
  name: 'AppHeader',
  components: {
    RouterLink 
  },
}
</script>

<style scoped>
  .app-header {
    background-color: black;
  }
  .app-header__title {
    color: darkgoldenrod;
  }
  .app-header__nav {
    display: flex;
    justify-content: space-around;
  }
</style>