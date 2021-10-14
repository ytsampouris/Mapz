<template>
<q-card>
    {{ $t("panelText.geolocation") }}
    <q-card-section v-if="!deviceCoordinate" class="full"></q-card-section>
    <q-card-section v-else class="subheading text-xs-center">
        {{ Number(Math.round(deviceCoordinate[0] + "e3") + "e-3") }}
        {{ Number(Math.round(deviceCoordinate[1] + "e3") + "e-3") }}

        {{
        this.$refs.map.$map
            .getView()
            .getProjection()
            .getCode()
        }}</q-card-section
    >

    <q-card-actions>
        <q-space />
        <q-btn
        v-if="deviceCoordinate"
        small
        flat
        @click="clearGeolocation"
        >cancel</q-btn
        >
    </q-card-actions>
</q-card>
</template>
<script>
export default {
    data() {
        return {
            deviceCoordinate: undefined
        }
    },
    methods: {
        clearGeolocation() {
        this.$root.$emit("geolocation:clear");
        this.deviceCoordinate = undefined;
        }
    }
}
</script>