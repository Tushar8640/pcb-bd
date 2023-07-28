import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: {},
  motherboard: {},
  storage: {},
  ram: {},
};

export const pcBuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      switch (action.payload.category) {
        case "Processor":
          state.cpu = action.payload;
          break;
        case "Motherboard":
          state.motherboard = action.payload;
          break;
        case "Storage":
          state.storage = action.payload;
          break;
        case "Ram":
          state.ram = action.payload;
          break;
        case "Power Supply":
          state.ram = action.payload;
          break;
        case "Others":
          state.ram = action.payload;
          break;
        default:
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBuild, decrement, incrementByAmount } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
