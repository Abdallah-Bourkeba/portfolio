import { create } from "zustand";
import { lightTheme, darkTheme } from "../utils/Themes";

const useThemeState = create((set) => ({
  mode: darkTheme,
  setTheme: () => set((state) => ({
    mode: state.mode === darkTheme ? lightTheme : darkTheme
  })),
}));

export default useThemeState;
