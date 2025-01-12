import React from "react";
import { StatusBars } from "@/app/components/components";
import RootStack from "./Stack/RootStack";
import { ThemeProvider } from "./Theme/ThemeContext";

const Index = () => {
  return (
    <>
      <ThemeProvider>
        <StatusBars />
        <RootStack />
      </ThemeProvider>
    </>
  );
};

export default Index;
