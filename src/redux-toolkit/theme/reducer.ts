import { localStorageMethods } from "../../shared/LocalStorage";
import type { PayloadAction } from "@reduxjs/toolkit";

export const themeReducers = {
  updateTheme: (state: any, action: PayloadAction<string>) => {
    state.value = action.payload || "light";
    localStorageMethods.updateItem("theme", { value: action.payload });
  },
};
