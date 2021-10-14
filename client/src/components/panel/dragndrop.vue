<template>
<q-card>
<q-card-section
    v-if="
    Object.keys(selectedFeature).length === 0 &&
        selectedFeature.constructor === Object
    "
>
    {{ $t("panelText.dragdrop") }}
</q-card-section>
<q-card-section v-else>
    <div v-if="selectedFeature.valid" class="overlayWrapper">
    <Strong>{{ selectedFeature.id }}</Strong>
    <ul>
        <li
        v-for="k in Object.keys(selectedFeature.properties)"
        :key="k"
        >
        {{ k }} : {{ selectedFeature.properties[k] }}
        </li>
    </ul>
    </div>
    <div v-else>
    <p>{{ $t("panelText.invalid") }}</p>
    </div>
</q-card-section>
<q-card-actions>
    <v-spacer></v-spacer>
    <q-btn small flat @click="clearUploaded">{{
    $t("labels.clearUploaded")
    }}</q-btn>
    <q-btn small flat @click="cancelUploaded">{{
    $t("labels.cancel")
    }}</q-btn>
</q-card-actions>
</q-card>
</template>