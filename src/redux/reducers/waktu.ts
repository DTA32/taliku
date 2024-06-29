import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WaktuState {
	value: number;
}

const initialState: WaktuState = {
	value: 20,
};

export const waktuSlice = createSlice({
	name: "waktu",
	initialState,
	reducers: {
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 20;
		},
	},
});

export const { decrement, reset } = waktuSlice.actions;
export const selectWaktu = (state: RootState) => state.waktu.value;
export default waktuSlice.reducer;
