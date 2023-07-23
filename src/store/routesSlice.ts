import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Route {
    geocode: [number, number]
    popUp: string
}

interface RoutesState {
    routes: Route[];
    selectedRoute: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: RoutesState = {
    routes: [],
    selectedRoute: null,
    status: 'idle',
    error: null,
};

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        // fetchRoutes: (state) => {
        //     state.status = 'loading';
        // },
        // fetchRoutesSuccess: (state, action: PayloadAction<Route[]>) => {
        //     state.status = 'succeeded';
        //     state.routes = action.payload;
        // },
        // fetchRoutesError: (state, action: PayloadAction<string>) => {
        //     state.status = 'failed';
        //     state.error = action.payload;
        // },
        // selectRoute: (state, action: PayloadAction<string>) => {
        //     state.selectedRoute = action.payload;
        // },
        // fetchRoute: (state, action: PayloadAction<string>) => {
        //     state.status = 'loading';
        // },
        // routeReceived: (state, action: PayloadAction<Route>) => {
        //     state.status = 'succeeded';
        //     // Здесь мы предполагаем, что каждый маршрут в состоянии имеет уникальный id
        //     const index = state.routes.findIndex(route => route.id === action.payload.id);
        //     if (index >= 0) {
        //         state.routes[index] = action.payload;
        //     }
        // },
        // fetchFailed: (state, action: PayloadAction<string>) => {
        //     state.status = 'failed';
        //     state.error = action.payload;
        // },
    },
});

export const {
    // fetchRoutes,
    // fetchRoutesSuccess,
    // fetchRoutesError,
    // selectRoute,
    // fetchRoute,
    // routeReceived,
    // fetchFailed
} = routesSlice.actions;
// export const FETCH_ROUTE = fetchRoute.type;
export default routesSlice.reducer;
