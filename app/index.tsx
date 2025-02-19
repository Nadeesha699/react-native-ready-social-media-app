import React, { useEffect, useState } from "react";
import { StatusBars } from "@/app/components/components";
import NewComerRootStack from "./Stack/NewComerRootStack";
import { ThemeProvider } from "./Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoggedRootStack from "./Stack/LoggedRootStack";
import OldComerRootStack from "./Stack/OldComerRootStack";

const Index = () => {
  const [logged, setLogged] = useState<string | null>(null);
  const [newComer, setNewComer] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      let a = await AsyncStorage.getItem("logged");
      let b = await AsyncStorage.getItem("newComer");
      setLogged(a);
      setNewComer(b);
    };
    loadData();
  }, []);
  return (
    <>
      <ThemeProvider>
        <StatusBars />
        {/* <ImageTest/> */}
        {logged === "1" ? (
          <LoggedRootStack />
        ) : newComer !== "1" ? (
          <NewComerRootStack />
        ) : (
          <OldComerRootStack />
        )}
      </ThemeProvider>
    </>
  );
};

export default Index;
