<template>
 <div class="userList">
   <div class="user-list__container">
     <div 
      v-for="user in users"
      :key="user.login.uuid"
      class="user-list__container__user"
      @click="showUser(user)">
      <div class="fade">
        {{fullName(user)}}
      </div>
      <img :src="user.picture.large">
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '../router'

export default {
  name: 'UserList',
  computed: {
    ...mapGetters({
      users: 'users',
    })
  },
  methods: {
    fullName(user) {
      return `${user.name.first} ${user.name.last}`
    },
    showUser(user) {
      router.$emit('navigate', {
        slug: user.login.username,
        name: 'users',
        user
      })
    }
  }
}
</script>

<style scoped>
  .user-list__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .user-list__container__user {
    position: relative;
    cursor: pointer;
  }
  .fade {
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
  .user-list__container__user:hover .fade {
    opacity: 1;
    visibility: visible;
  }
</style>