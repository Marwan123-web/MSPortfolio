import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../shared/LocalStorage";
import { themeReducers } from "./reducer";

const themeinitialState =
  localStorageMethods.getItem("theme") !== null &&
  localStorageMethods.getItem("theme") !== undefined
    ? localStorageMethods.getItem("theme")
    : localStorageMethods.addIetm("theme", { value: "light" });

export const themeSlice = createSlice({
  name: "theme",
  initialState:
    themeinitialState &&
    (themeinitialState.value === "light" || themeinitialState.value === "dark")
      ? themeinitialState
      : { value: "light" },
  reducers: themeReducers,
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
