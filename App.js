import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastucture/theme";

import { Navigation } from "./src/infrastucture/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeUSH5qUZMuZlp9v_R-GzJsTg6mocvgIM",
  authDomain: "mealstogo-66f59.firebaseapp.com",
  projectId: "mealstogo-66f59",
  storageBucket: "mealstogo-66f59.appspot.com",
  messagingSenderId: "74095848469",
  appId: "1:74095848469:web:74bc8ca3d511e75d85f21c",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar stlye="auto" />
    </React.Fragment>
  );
}
