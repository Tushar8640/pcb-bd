import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducre from "@/redux/pcbuilder/pcBuilderSlice";
export const store = configureStore({
  reducer: {
    pcbuilder: pcBuilderReducre,
  },
});
