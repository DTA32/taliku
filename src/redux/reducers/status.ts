import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum StatusEnum {
	NOT_STARTED,
	JUST_STARTED,
	IN_PROGRESS,
	RESULT_ANNOUNCE,
	TIMEOUT,
	MENANG,
	KALAH,
	SERI,
}

interface StatusState {
	value: StatusEnum;
}

const initialState: StatusState = {
	value: 0,
};

export const statusSlice = createSlice({
	name: "status",
	initialState,
	reducers: {
		change: (state, action) => {
			state.value = action.payload;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { change, reset } = statusSlice.actions;
export const selectWaktu = (state: RootState) => state.waktu.value;
export default statusSlice.reducer;
