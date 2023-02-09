import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	objectToSave: {},
};

const customSlice = createSlice({
	name: "reducerName",
	initialState,
	reducers: {
		setState: (state = null, payload) => {
			state.objectToSave = payload.objectToSave;
		},
	},
});

export const selectCustomObject = (state) => state.reducerName.objectToSave;

export const { setState } = customSlice.actions;
export default customSlice.reducer;