import "react-native-gesture-handler";
import "expo-dev-client";
import React from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { settings } from "./settings";
import AppNavigator from "./src/navigator/navigation";
import { store, persistor } from "./src/redux/store";

settings;

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

// export default Sentry.Native.wrap(App)     ;
