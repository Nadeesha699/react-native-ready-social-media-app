import React, { useEffect, useState } from "react";
import { StatusBars } from "@/app/components/components";
import NewComerRootStack from "./Stack/NewComerRootStack";
import { ThemeProvider } from "./Theme/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoggedRootStack from "./Stack/LoggedRootStack";
import OldComerRootStack from "./Stack/OldComerRootStack";
import Test1 from "./Test/Test1";
import Test2 from "./Test/Test2";
import Test3 from "./Test/Test3";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPBQdlU6WYn4GlEzRBtSoUEvdNMOxQQY",
  authDomain: "react-native-ready-app-ac227.firebaseapp.com",
  projectId: "react-native-ready-app-ac227",
  storageBucket: "react-native-ready-app-ac227.firebasestorage.app",
  messagingSenderId: "392327832530",
  appId: "1:392327832530:web:0aa536d8b36b18c29f9e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Index = () => {
  const [logged, setLogged] = useState<string | null>(null);
  const [newComer, setNewComer] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      let a = await AsyncStorage.getItem("logged");

      let b = await AsyncStorage.getItem("newComer");
      setLogged(a);
      setNewComer(b);
      console.log(logged);
      console.log(newComer);
    };
    loadData();
  }, []);
  return (
    <>
      <ThemeProvider>
        <StatusBars />
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
