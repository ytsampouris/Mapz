<template>
  <q-card>
    
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-purple-8 text-white">
        {{ $t("labels.panelTitle.measure") }}
      </q-banner>
    </div>

    <q-card-actions>
      <q-btn
        icon="fa fa-ruler"
        class="q-mr-xs"
        :color="$store.state.webgis.measureType === 'LineString' ? 'primary' : 'secondary'"
        @click="setMeasureType('LineString')"/>

      <q-btn
        icon="fa fa-draw-polygon"
        class="q-mr-xs"
        :color="$store.state.webgis.measureType === 'Polygon' ? 'primary' : 'secondary'"
        @click="setMeasureType('Polygon')"/>

      <q-btn small flat @click="clearMeasure()">{{
        $t("labels.clear")
        }}
      </q-btn>
    </q-card-actions>

    <q-banner class="bg-grey-3">
      <span id="measurement" ref="measurement" />
    </q-banner>
  </q-card>
</template>
<script>
export default {
  name:"measureTool",
  data() {
    return {
      lengthUnit: "meters",
      lengthUnits: ["meters", "miles", "yards", "feet"],
      areaUnit: "sq. meters",
      areaUnits: ["sq. meters", "sq. miles", "sq. yards", "sq. feet"],
      convertLength: {
        meters: {
          meters: 1,
          miles: 0.000621371192,
          yards: 1.0936133,
          feet: 3.2808399
        },
        miles: {
          meters: 1609.344,
          miles: 1,
          yards: 1760,
          feet: 5280
        },
        yards: {
          meters: 0.9144,
          miles: 0.000568181818,
          yards: 1,
          feet: 3
        },
        feet: {
          meters: 0.3048,
          miles: 0.000189393939,
          yards: 0.333333333,
          feet: 1
        },
        "sq. meters": {
          "sq. meters": 1,
          "sq. miles": 3.8610215854781257e-7,
          "sq. yards": 1.19599005,
          "sq. feet": 10.7639104
        },
        "sq. miles": {
          "sq. meters": 2589988.11,
          "sq. miles": 1,
          "sq. yards": 3097600,
          "sq. feet": 27878400
        },
        "sq. yards": {
          "sq. meters": 0.83612736,
          "sq. miles": 3.22830579e-7,
          "sq. yards": 1,
          "sq. feet": 9
        },
        "sq. feet": {
          "sq. meters": 0.09290304,
          "sq. miles": 0.000000035870064279155,
          "sq. yards": 0.111111111,
          "sq. feet": 1
        }
      },
      measureType: "LineString",
      measureOutput: 0
    }
  },
  methods: {
    setMeasureType(type) {
      this.$store.commit('webgis/SET_MEASURE_TYPE', type);
      this.$root.$emit("map:measure:start", type);
      this.$root.$emit("map:mapStatus:measure", type);
      
      if(type === 'LineString') {
        this.$store.commit('webgis/SET_MEASURE_UNIT', "meters");
      }
      if(type === 'Polygon') {
        this.$store.commit('webgis/SET_MEASURE_UNIT', "sq. meters");
      }
    },
    setMeasureUnit() {
      this.$store.commit('webgis/SET_MEASURE_UNIT', this.lengthUnit);
    },
    clearMeasure() {
      this.$root.$emit("map:measure:clear");
      this.$store.commit('webgis/SET_MEASURE_TYPE', "LineString");
      this.$store.commit('webgis/SET_MEASURE_OUTPUT', "");
    }
  }
}
</script>