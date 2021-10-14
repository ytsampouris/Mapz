<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/favicon-256x256.png"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
    }
  }
}
</script>
