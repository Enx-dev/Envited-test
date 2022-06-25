import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: {
    bill: 0,
    tip: 0,
    people: 0,
    tipTotal: 0,
    total: 0,
    reset: false,
  },
  reducers: {
    setBill(state, action) {
      state.bill = action.payload;
    },
    setTip(state, action) {
      state.tip = action.payload;
    },
    setPeople(state, action) {
      state.people = action.payload;
    },
    getTipAmount(state) {
      const tipAmount = (state.tip / 100) * state.bill;
      const tipTotal = tipAmount / state.people;
      state.tipTotal = +tipTotal.toFixed(2);
    },
    getTotalAmount(state) {
      const totalAmount = state.bill / state.people;
      const total = totalAmount + state.tipTotal;
      state.total = +total.toFixed(2);
    },
    reset(state, action) {
      state.bill = 0;
      state.people = 0;
      state.tip = 0;
      state.tipTotal = 0;
      state.total = 0;
      state.reset = action.payload;
    },
  },
});

export const {
  setBill,
  setPeople,
  setTip,
  getTipAmount,
  getTotalAmount,
  reset,
} = tipSlice.actions;
export const tipReducer = tipSlice.reducer;
