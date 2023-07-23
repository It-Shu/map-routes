import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import { watcherSaga } from '../sagas/routesSaga';
import routesReducer from './routesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        routes: routesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
