<template>
 <div class="userList">
   <div class="userList__container">
     <div 
      v-for="user in users"
      :key="user.login.uuid"
      class="userList__container__user">
      <img :src="user.picture.large">
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserList',
   computed: {
    ...mapGetters({
      users: 'users',
    })
  }
}
</script>

<style scoped>
  .userList__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>