<template>
  <div class="app-user">
    <a
     class="close"
     @click.prevent="closeUser">
       X
    </a>
    <h2 class="app-user__name"> {{userData.fullName}}</h2>
    <img
      :src="userData.thumbnail"
      :ismap="userData.fullName"
      class="app-user__picture">
  </div>
</template>

<script>
export default {
  name: 'AppUser',
  props: {
    user: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    userData() {
      return {
        fullName: `${this.user.name.first} ${this.user.name.last}`,
        thumbnail: this.user.picture.large
      }
    }    
  },
  methods: {
    closeUser() {
      this.$emit('close-user')
    }
  }
}
</script>

<style scoped>
.app-user {
  position: fixed;
  width: 30rem;
  left: calc(50vw - 15rem);
  top: 20vmin;
  z-index: 1;
  background-color: lightgray;
  border: 3px solid gray;
  padding: 1rem;
  text-align: center;
  box-shadow: 2px 1px 20px black;
}

.app-user__name {
  margin-top: 0;
}

.app-user__picture {
  border: 1px solid;
}

.close {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>