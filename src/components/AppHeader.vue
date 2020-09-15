<template>
  <div class="app-header">
     <div class="app-header__title">
       <h2>User directory</h2> 
     </div>
     <div class="app-header__nav">
       <a
        @click.prevent="selectView('UserList')"
        class="app-header__nav__link">
          Directory
       </a>
       <a
        @click.prevent="selectView('Contact')"
        class="app-header__nav__link">
          Contact
       </a>
       <a
        @click.prevent="selectView('Legal')"
        class="app-header__nav__link">
          Legal
       </a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    selectView(nameView) {
      this.$emit('select-view', nameView)
    }
  }
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
  .app-header__nav__link {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
</style>