<template lang="pug">
  #app
    pm-header
    pm-notification(v-show="showNotification")
      p(slot="body") No se encontrarón resultados
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(type="text", 
                placeholder="¿Qué canción estás buscando?", 
                v-model="searchQuery"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
          p.help.is-info.has-text-right
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pm-track(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )
    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Se encontraron ${this.tracks.length} resultados`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results{
    margin-top: 20px;
  }
  .is-active{
    border: 3px solid deepskyblue;
  }
</style>
