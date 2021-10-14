<template v-if="mapStatus === 'print'">
<q-card>
    <q-card-section>
        <div class="q-pa-md q-gutter-sm">
            <q-banner rounded class="bg-purple-8 text-white">
                {{ $t("panelText.print")}}
            </q-banner>
        </div>
    </q-card-section>
</q-card>
</template>