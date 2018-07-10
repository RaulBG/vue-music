<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}
    ul
      li(v-for="i in items") {{ i }}
    input(v-model="nombre")
    input(v-model="lastName")
    p Tu nombre es {{ nombre }}
    a(:href="url" target="_blank") Nuevo Link
    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Proyecto de VueJS',
      showValue: true,
      value: 'Hola Mundo',
      items: [1, 2, 3, 4, 5],
      nombre: '',
      lastName: '',
      url: 'http://encodedreams.com'
    }
  },
  computed: {
    fullName () {
      return `${this.nombre} ${this.lastName}`
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
