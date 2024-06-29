import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SalahState {
	value: number;
}

const initialState: SalahState = {
	value: 0,
};

export const salahSlice = createSlice({
	name: "salah",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { increment, reset } = salahSlice.actions;
export const selectSalah = (state: RootState) => state.salah.value;
export default salahSlice.reducer;
