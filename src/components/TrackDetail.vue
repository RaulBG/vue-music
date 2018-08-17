<template lang="pug">
.container
  pm-loader(v-show="isLoading")
  .columns
    .column.is-5.is-offset-4
      pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'

import PmLoader from '@/components/shared/Loader.vue'
import PmTrack from '@/components/Track.vue'

export default {
  components: { PmTrack, PmLoader },
  data () {
    return {
      track: {},
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    trackService.getById(id).then(res => {
      this.track = res
      this.isLoading = false
    })
  }
}
</script>
<style lang="scss" scoped>
.columns{
  margin: 20px;
}
</style>

