/*
export function someMutation (state) {
}
*/
export function SET_SHOWPANEL (state, payload) {
    console.log('setting show panel in vuex');
    state.showPanel = payload;
}

export function SET_FEATURE_INFO (state, payload) {
    state.featureInfo = payload;
}

export function SET_MAP_STATUS (state, payload) {
    state.mapStatus = payload;
}

export function SET_DRAW_TYPE (state, payload) {
    state.drawType = payload;
}

export function SET_MEASURE_OUTPUT (state, payload) {
    state.measureOutput = payload;
}

export function SET_MEASURE_TYPE (state, payload) {
    state.measureType = payload;
}

export function SET_MEASURE_UNIT (state, payload) {
    state.measureUnit = payload;
}
