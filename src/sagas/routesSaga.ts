import { put, takeLatest } from 'redux-saga/effects';
// import { fetchRoute as fetchRouteAction } from '../store/routesSlice';
// import { getRouteFromAPI } from '../api/apiService';
// import { FETCH_ROUTE } from '../store/routesSlice';
// import { Route } from '../store/routesSlice';
//
// export function* fetchRoute(action: ReturnType<typeof fetchRouteAction>): Generator<unknown, Route, unknown> {
//     try {
//         const routeData: Route = yield getRouteFromAPI(action.payload);
//         yield put({ type: 'routes/routeReceived', payload: routeData });
//     } catch (error) {
//         yield put({ type: 'routes/fetchFailed', payload: error.message });
//     }
// }
//
// export function* watcherSaga() {
//     yield takeLatest(FETCH_ROUTE, fetchRoute);
// }

