import { configureStore, Store } from "@reduxjs/toolkit";
import soalReducer from "./reducers/soal";
import benarReducer from "./reducers/benar";
import salahReducer from "./reducers/salah";
import waktuReducer from "./reducers/waktu";
import statusReducer from "./reducers/status";

export const store: Store = configureStore({
	reducer: {
		soal: soalReducer,
		benar: benarReducer,
		salah: salahReducer,
		waktu: waktuReducer,
		status: statusReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
