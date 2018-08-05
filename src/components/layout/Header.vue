<template lang="pug">
    section.hero.is-info
      .hero-head
        header.navbar
          .container
            .navbar-start
              .navbar-item
                strong 📻 Vue.js Music
            .navbar-end.navbar-menu

        .hero-body
          .container.has-text-centered
            h1.title Vue.js Music
            h2.subtitle Canciones que están Vue-nísimas
            pm-player
                
</template>
<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer }
}
</script>
