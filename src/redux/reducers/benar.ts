import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BenarState {
	value: number;
}

const initialState: BenarState = {
	value: 0,
};

export const benarSlice = createSlice({
	name: "benar",
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

export const { increment, reset } = benarSlice.actions;
export const selectBenar = (state: RootState) => state.benar.value;
export default benarSlice.reducer;
