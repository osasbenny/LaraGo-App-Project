import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Route {
  id: string;
  origin: string;
  destination: string;
  steps: Array<{
    mode: 'bus' | 'brt' | 'keke' | 'danfo';
    description: string;
    duration: number;
    fare: number;
  }>;
  totalDuration: number;
  totalFare: number;
}

interface RoutesState {
  recent: Route[];
  saved: Route[];
  loading: boolean;
  error: string | null;
}

const initialState: RoutesState = {
  recent: [],
  saved: [],
  loading: false,
  error: null,
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    addRecentRoute: (state, action: PayloadAction<Route>) => {
      state.recent.unshift(action.payload);
      if (state.recent.length > 10) {
        state.recent.pop();
      }
    },
    saveRoute: (state, action: PayloadAction<Route>) => {
      state.saved.unshift(action.payload);
    },
    removeRecentRoute: (state, action: PayloadAction<string>) => {
      state.recent = state.recent.filter(route => route.id !== action.payload);
    },
    removeSavedRoute: (state, action: PayloadAction<string>) => {
      state.saved = state.saved.filter(route => route.id !== action.payload);
    },
  },
});

export const {
  addRecentRoute,
  saveRoute,
  removeRecentRoute,
  removeSavedRoute,
} = routesSlice.actions;

export default routesSlice.reducer;