<template>
  <q-card>
  <q-card-section>
    <div>
        <q-banner rounded class="bg-purple-8 text-white">
            {{ $t("panelText.draw") }}
        </q-banner>
    </div>

    <q-select
      v-model="drawType"
      :options="drawTypes"
      @input="setDrawType()"/>
    </q-card-section>
    <q-card-actions>
      <q-space />
      <q-btn small flat @click="clearDraw">{{
      $t("labels.clear")
      }}</q-btn>
      <!-- <q-btn small flat @click="cancelDraw">{{
      $t("labels.cancel")
      }}</q-btn> -->
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  data() {
    return {
      drawType: {
        id: 1,
        label: this.$t("labels.drawTypes.point"),
        value: "Point"
      },
      drawTypes: [
        {
          id: 1,
          label: this.$t("labels.drawTypes.point"),
          value: "Point"
        },
        {
          id: 2,
          label: this.$t("labels.drawTypes.linestring"),
          value: "LineString"
        },
        {
          id: 3,
          label: this.$t("labels.drawTypes.polygon"),
          value: "Polygon"
        }
      ]
    }
  },
  methods: {
    clearDraw() {
      this.$root.$emit("draw:clear");
    },
    // cancelDraw() {
    //   this.$root.$emit("draw:cancel");
    //   this.drawType = {
    //     id: 1,
    //     label: this.$t("labels.drawTypes.point"),
    //     value: "Point"
    //   };
    //   this.clearDraw();
    // },
    setDrawType() {
      this.$store.commit('webgis/SET_DRAW_TYPE', this.drawType.value);
    }
  }
}
</script>