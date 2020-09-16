<template>
  <a
    @click.prevent="navigate"
    class="link">{{name}}</a>
</template>

<script>
import router from "../router"
export default {
  name: 'RouterLink',
  props: {
    name: {
      type: String,
      required: true
    },
    dest: {
      type: String,
      required: true
    }
  },
  methods: {
    navigate() {
      router.$emit('navigate', { slug: this.dest })
    }
  }
}
</script>

<style scoped>
 .link {
   text-decoration: none;
   color: white;
   cursor: pointer;
 }
</style>