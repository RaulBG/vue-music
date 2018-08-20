<template lang="pug">
    section.hero.is-info
      .hero-head
        header.navbar
          .container
            .navbar-start
              .navbar-item
                strong 📻 Vue.js Music
            .navbar-end.navbar-menu
              a.navbar-item(@click="selectLang('en')") 🇬🇧
              a.navbar-item(@click="selectLang('es')") 🇪🇸
              router-link.navbar-item(:to="{ name: 'search' }") {{ $t('search') }}
              router-link.navbar-item(to="about") {{ $t('about') }}

        .hero-body
          .container.has-text-centered
            h1.title Vue.js Music
            h2.subtitle Canciones que están Vue-nísimas
            pm-player
                
</template>
<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
