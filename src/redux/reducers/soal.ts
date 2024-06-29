import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SoalState {
	value: number;
}

const initialState: SoalState = {
	value: 0,
};

export const soalSlice = createSlice({
	name: "soal",
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

export const { increment, reset } = soalSlice.actions;
export const selectSoal = (state: RootState) => state.soal.value;
export default soalSlice.reducer;
